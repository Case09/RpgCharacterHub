import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { grey } from 'material-ui/colors';

const styles = theme => ({
    root: {
        textAlign: "center"
    }
});

class Greetings extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.root} item xs={12}>
                <Typography type="display1" color="accent">RPG Character sheet sharing hub</Typography>
            </Grid>
        )
    }
}

Greetings.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Greetings);