import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Greetings from './Greetings';

const style = theme => ({
    root: {
        marginTop: "10px",
        marginBottom: "10px",
        paddingLeft: "10px",
        paddingRight: "10px"
    },
    paper: {
        padding: 16
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
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            nesto1
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            nesto2
                        </Paper>
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