import { Routes, Route } from "react-router-dom";
import { AppRoute, AppRoutes } from "../utils/router";
import { AuthProvider } from "../hooks/useAuth";
import { withTheme } from "../hooks/withTheme";
import Box from "@mui/material/Box";
import Nav from "../components/Layout/Nav";
import Footer from "../components/Layout/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Box sx={{ display: "flex", height: "100vh" }}>
          <Nav />
          <Routes>
            {AppRoutes.map(({ path, privateRoute, Component }, index) => (
              <Route
                key={index}
                path={path}
                element={
                  <AppRoute
                    Component={<Component />}
                    privateRoute={privateRoute}
                  />
                }
              />
            ))}
          </Routes>
          <Footer />
        </Box>
      </AuthProvider>
    </div>
  );
}

export default withTheme(App);
