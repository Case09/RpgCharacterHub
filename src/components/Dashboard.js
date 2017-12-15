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
        paddingTop: "23px",
        margin: theme.spacing.unit
    },
    myLatest: {
        borderRadius: 3,
        margin: theme.spacing.unit,
        background: "lightGray"
    }
});

const DashboardLayout = ({classes}) => {
    return (
        <Grid className={classes.root} container spacing={24} >
            <Greetings />
            <Grid item xs={6}>
                <Navigation />
            </Grid>
            <Grid item xs={5}>
                <Typography className={classes.latest} type="headline" color="accent">Latest public character sheets:</Typography>
            </Grid>
            <Grid className={classes.myLatest} item xs={6}>
                Latest Sheets
            </Grid>
            <Grid className={classes.myLatest} item xs={5}>
                Latest Public Sheets
            </Grid>
        </Grid>
    );
}

export default withStyles(style)(DashboardLayout);