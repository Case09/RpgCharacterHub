import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import Greetings from './Greetings';
import Navigation from './Navigation';

const style = theme => ({
    root: {
        flexGrow: 1,
        marginTop: "10px",
        marginBottom: "10px",
        paddingLeft: "10px",
        paddingRight: "10px"
    },
    latest: {
        paddingTop: "23px"
    }
});

const DashboardLayout = ({classes}) => {
    return (
        <Grid className={classes.root} container spacing={24} >
            <Greetings />
            <Grid item xs={12} sm={7}>
                <Navigation />
            </Grid>
            <Grid item xs={12} sm={5}>
                <Typography className={classes.latest} type="headline" color="accent">Latest public character sheets:</Typography>
            </Grid>
        </Grid>
    );
}

export default withStyles(style)(DashboardLayout);