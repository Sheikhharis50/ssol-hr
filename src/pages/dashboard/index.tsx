import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { useAuth } from "../../hooks/useAuth";

type Props = {};

const DashboardPage: React.FC<Props> = () => {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <Layout>
      <h1>Dashboard</h1>
      <hr />
      <p>
        Welcome {auth.user}!{" "}
        <button
          onClick={() => {
            auth.signout(() => navigate("/"));
          }}
        >
          Sign out
        </button>
      </p>
    </Layout>
  );
};

export default DashboardPage;
