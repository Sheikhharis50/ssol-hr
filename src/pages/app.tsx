import { Routes, Route } from "react-router-dom";
import { AppRoute, AppRoutes } from "../utils/router";
import { AuthProvider } from "../hooks/useAuth";
import { withTheme } from "../hooks/withTheme";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
      </AuthProvider>
    </div>
  );
}

export default withTheme(App);
