import React from "react";

import { Grid } from "@material-ui/core";

import Rooms from "./Rooms";

import Header from "./Header";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Header></Header>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Rooms></Rooms>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
