import React from "react";
import { PageHeader } from "../style";
import { useDepartmentStyles, ButtonContainer } from "./style";
import { useNavigate } from "react-router-dom";
import {
  GridRowsProp,
  GridColumns,
  GridActionsCellItem,
  GridSelectionModel,
} from "@mui/x-data-grid";

// import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

// core components
import Layout from "../../components/Layout";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import DataGrid from "../../components/DataGrid";
import Button from "../../components/Common/Button";

type Props = {};

const DepartmentsPage: React.FC<Props> = (props) => {
  const classes = useDepartmentStyles(props);
  const navigate = useNavigate();

  type rowType = {
    id: number;
    title: string;
    code: string;
    no_of_employees: number;
  };
  const [rows, setRows] = React.useState<GridRowsProp | Array<rowType>>([
    { id: 1, title: "Software", code: "SSU", no_of_employees: 2 },
    { id: 2, title: "Electrical", code: "ESU", no_of_employees: 3 },
    { id: 3, title: "Mechanical", code: "MSU", no_of_employees: 123 },
    { id: 4, title: "Human Resources", code: "HSU", no_of_employees: 123 },
    { id: 5, title: "Airforce", code: "ASU", no_of_employees: 123 },
    { id: 6, title: "Sales", code: "SAU", no_of_employees: 123 },
    { id: 7, title: "Design", code: "DSU", no_of_employees: 123 },
  ]);
  const columns: GridColumns = [
    { field: "title", headerName: "Title", flex: 1, editable: true },
    { field: "code", headerName: "Department Code", flex: 1, editable: true },
    {
      field: "no_of_employees",
      headerName: "No of Employees",
      flex: 1,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      cellClassName: classes.actions,
      editable: true,
      getActions: ({ id }) => {
        return [
          // <GridActionsCellItem
          //   icon={<EditIcon />}
          //   label="Edit"
          //   className={classes.textPrimary}
          //   onClick={handleEdit(id)}
          //   color="inherit"
          // />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDelete(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];
  const [checkedRows, setCheckedRows] = React.useState<GridSelectionModel>([]);

  // const handleEdit = (id: any) => (event: any) => {
  //   event.stopPropagation();
  //   console.log(id);
  // };
  const handleDelete = (id: any | Array<any>) => (event: any) => {
    event.stopPropagation();

    const ids: Array<string> =
      typeof id === "object"
        ? id.map((d: any) => d.toString())
        : [id.toString()];

    if (window.confirm("Are you sure, want to delete?")) {
      setRows(
        rows.filter((row) => {
          return !ids.includes(row.id.toString());
        })
      );
    }
  };

  return (
    <Layout>
      <PageHeader>
        <h1>Departments</h1>
        <ButtonContainer>
          <Button
            text="Delete"
            color="error"
            style={{
              marginRight: "1em",
            }}
            disabled={checkedRows.length <= 0}
            onClick={handleDelete(checkedRows)}
          />
          <Button
            text="Add New"
            color="royal"
            onClick={() => navigate("/departments/add")}
          />
        </ButtonContainer>
      </PageHeader>
      <hr />
      <GridContainer sx={{ marginBlock: 1 }}>
        <GridItem item xs={12}>
          <DataGrid
            columns={columns}
            rows={rows}
            searchBar
            checkboxSelection
            handelCheckedRows={(ch_rows: GridSelectionModel) =>
              setCheckedRows(ch_rows)
            }
            initialState={{
              filter: {
                filterModel: {
                  items: [
                    {
                      columnField: "title",
                      operatorValue: "contains",
                      value: "",
                    },
                    {
                      columnField: "code",
                      operatorValue: "contains",
                      value: "",
                    },
                  ],
                },
              },
            }}
          />
        </GridItem>
      </GridContainer>
    </Layout>
  );
};

export default DepartmentsPage;
