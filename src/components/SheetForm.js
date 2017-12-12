import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';  

const styles = theme => ({
    root: {
        padding: 20
    },
    title: {
        textAlign: 'center'
    },
    textField: {
        width: '100%'
    }
})

const SheetForm = ({classes}) => {
    return (
        <div>
            <Grid className={classes.root} container spacing={24}>
                <Grid item xs={12}>
                    <Typography className={classes.title} type="headline" color="accent">Create New Character Sheet</Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <TextField className={classes.textField} />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <TextField className={classes.textField} />
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(SheetForm);