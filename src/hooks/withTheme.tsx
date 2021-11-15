import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ColorContext = React.createContext({ toggleColorMode: () => {} });

declare module "@mui/material/styles" {
  interface Palette {
    dark: Palette["primary"];
    royal: Palette["primary"];
  }
  interface PaletteOptions {
    dark: PaletteOptions["primary"];
    royal: PaletteOptions["primary"];
  }
}

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
          royal: {
            main: "#035397",
            contrastText: "#fff",
          },
          dark: {
            main: "#333333",
            contrastText: "#fff",
          },
          contrastThreshold: 3,
          tonalOffset: 0.2,
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
