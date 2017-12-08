import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

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

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid className={classes.root} container spacing={24} >
                    <Greetings />
                    <Grid item xs={12} sm={7}>
                        <Navigation />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Typography className={classes.latest} type="headline" color="accent">Latest character sheets:</Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
};

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(style)(Dashboard);