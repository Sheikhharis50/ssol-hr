import { Routes, Route } from "react-router-dom";
import { AppRoute } from "../utils/router";
import { AuthProvider } from "../hooks/useAuth";
import { withTheme } from "../hooks/withTheme";

// Pages
import DashboardPage from "./dashboard";
import LoginPage from "./login";
import AboutPage from "./about";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={<AppRoute component={<DashboardPage />} privateRoute />}
          />
          <Route
            path="/login"
            element={<AppRoute component={<LoginPage />} />}
          />
          <Route
            path="/about"
            element={<AppRoute component={<AboutPage />} privateRoute />}
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default withTheme(App);
