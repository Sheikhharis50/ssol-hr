import React from "react";
import Layout from "../../components/Layout";
import { useAuth } from "../../hooks/useAuth";
import { PageHeader } from "./style";

type Props = {};

const DashboardPage: React.FC<Props> = () => {
  let auth = useAuth();

  return (
    <Layout>
      <PageHeader>
        <h1>Dashboard</h1>
        <small>
          <b>Welcome</b>, {auth.user?.name}!{" "}
        </small>
      </PageHeader>
      <hr />
      <p>Description</p>
    </Layout>
  );
};

export default DashboardPage;
