import React from "react";
import Layout from "../../components/Layout";
import { useAuth } from "../../hooks/useAuth";
import { dashboardStyle } from "./style";
import { PageHeader } from "../style";
// import ChartistGraph from "react-chartist";
// import Icon from "@mui/material/Icon";
import { makeStyles } from "@mui/styles";

// icons
import Store from "@mui/icons-material/Store";
import Warning from "@mui/icons-material/Warning";
import DateRange from "@mui/icons-material/DateRange";
import LocalOffer from "@mui/icons-material/LocalOffer";
import Update from "@mui/icons-material/Update";
// import ArrowUpward from "@mui/icons-material/ArrowUpward";
// import AccessTime from "@mui/icons-material/AccessTime";
import Accessibility from "@mui/icons-material/Accessibility";
import BugReport from "@mui/icons-material/BugReport";
// import Code from "@mui/icons-material/Code";
import Cloud from "@mui/icons-material/Cloud";

// core components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Danger from "../../components/Typography/Danger";
import Card from "../../components/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardIcon from "../../components/Card/CardIcon";
import CardFooter from "../../components/Card/CardFooter";

// import { bugs, website, server } from "../../utils/constants";

// import {
//   dailySalesChart,
//   emailsSubscriptionChart,
//   completedTasksChart,
// } from "../../utils/charts.js";

const useDashboardStyles = makeStyles(dashboardStyle);

type Props = {};

const DashboardPage: React.FC<Props> = () => {
  let auth = useAuth();
  const classes = useDashboardStyles();

  return (
    <Layout>
      <PageHeader>
        <h1>Dashboard</h1>
        <small>
          <b>
            Welcome <span className="text-capitalize">{auth.user?.role}</span>
          </b>
          , {auth.user?.name}! <br />
        </small>
      </PageHeader>
      <hr />
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Cloud />
              </CardIcon>
              <p className={classes.cardCategory}>Used Space</p>
              <h3 className={classes.cardTitle}>
                49/50 <small>GB</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="/#" onClick={(e) => e.preventDefault()}>
                  Get more space
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <BugReport />
              </CardIcon>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </Layout>
  );
};

export default DashboardPage;
