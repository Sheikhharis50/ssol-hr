import React from "react";
import Layout from "../../components/Layout";
import { PageHeader } from "../style";

// core components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";

type Props = {};

const AttendancePage: React.FC<Props> = () => {
  return (
    <Layout>
      <PageHeader>
        <h1>Attendance</h1>
      </PageHeader>
      <hr />
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}></GridItem>
      </GridContainer>
    </Layout>
  );
};

export default AttendancePage;
