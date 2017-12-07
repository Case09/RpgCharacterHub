import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { grey } from 'material-ui/colors';
import { withStyles } from 'material-ui/styles';

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