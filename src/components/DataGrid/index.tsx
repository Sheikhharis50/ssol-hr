import React from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridEditRowsModel,
  GridToolbar,
} from "@mui/x-data-grid";
import { escapeRegExp } from "../../utils";
import SearchToolbar from "./SearchToolbar";

type DataGridProps = {
  rows: GridRowsProp;
  columns: Array<GridColDef>;
  editMode?: "row" | "cell";
  searchBar?: boolean;
  filtersBar?: boolean;
  checkboxSelection?: boolean;
  handelCheckedRows?: Function;
  height?: string;
};

const AppDataGrid: React.FC<DataGridProps | any> = ({
  rows = [],
  columns = [],
  editMode = "cell",
  searchBar = false,
  filtersBar = false,
  checkboxSelection = false,
  handelCheckedRows,
  height = "76vh",
  ...rest
}) => {
  // states
  const [editedRows, setEditedRows] = React.useState([...rows]);
  const [searchText, setSearchText] = React.useState("");

  // hooks
  React.useEffect(() => {
    setEditedRows(rows);
  }, [rows]);

  if (searchBar && filtersBar) {
    throw Error("searchBar and filterBar cannot be used together");
  }

  const searchProps = searchBar
    ? {
        components: { Toolbar: SearchToolbar },
        componentsProps: {
          toolbar: {
            value: searchText,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
              requestSearch(event.target.value),
            clearSearch: () => requestSearch(""),
          },
        },
      }
    : {};

  const filtersProps = filtersBar
    ? {
        components: {
          Toolbar: GridToolbar,
        },
      }
    : {};

  // handlers
  const handleEditRows = React.useCallback(
    (model: GridEditRowsModel) => {
      if (editMode === "row") {
        const id = Object.keys(model)[0];
        const selected_obj = model[id];
        if (selected_obj) {
          let row: any = { id };
          Object.keys(selected_obj).forEach((key: string) => {
            row[key] = selected_obj[key].value;
          });
          setEditedRows(
            editedRows.map((e_row) => {
              return e_row.id.toString() === id ? row : e_row;
            })
          );
        }
      }
    },
    [editedRows, editMode]
  );
  const requestSearch = (searchValue: string) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = rows.filter((row: any) => {
      return Object.keys(row).some((field: any) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setEditedRows(filteredRows);
  };

  return (
    <div style={{ display: "flex", width: "100%", height }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          rows={editedRows}
          columns={columns}
          editMode={editMode}
          onEditRowsModelChange={handleEditRows}
          checkboxSelection={checkboxSelection}
          onSelectionModelChange={(newSelectionModel) => {
            handelCheckedRows(newSelectionModel);
          }}
          {...searchProps}
          {...filtersProps}
          {...rest}
        />
      </div>
    </div>
  );
};

export default AppDataGrid;
