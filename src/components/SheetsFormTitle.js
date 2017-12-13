import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

// TODO: Change for edit state

const styles = theme => ({
    title: {
        textAlign: 'center'
    }
})

const SheetsFormTitle = ({classes}) => {
    return (
        <Grid item xs={12}>
            <Typography className={classes.title} type="headline" color="accent">Create New Character Sheet</Typography>
        </Grid>
    )
}

export default withStyles(styles)(SheetsFormTitle);