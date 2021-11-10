import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ColorContext = React.createContext({ toggleColorMode: () => {} });

const withTheme = (Component: React.FC) => (props: any) => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    </ColorContext.Provider>
  );
};

export { withTheme, ColorContext };
