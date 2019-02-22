import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    height: '100vh',
    backgroundColor: '#ccc'
  }
};

const Dashboard = ({ children, classes }) => {
  return (
    <Grid className={classes.root} alignItems="center" justify="center" container>
      {children}
    </Grid>
  );
};

export default withStyles(styles)(Dashboard);
