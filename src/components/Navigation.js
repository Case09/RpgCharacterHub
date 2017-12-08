import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';

import NoteAdd from 'material-ui-icons/NoteAdd';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Book from 'material-ui-icons/Book';
import Favorite from 'material-ui-icons/Favorite';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';

const style = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

const Navigation = ({classes}) => {
    return (
        <div>
            <Link to="/sheets/new">
                <Button fab color="primary" aria-label="new-sheet" className={classes.button}>
                    <AddIcon />
                </Button>
            </Link>
            <Button fab color="accent" aria-label="my-sheets" className={classes.button}>
                <Book />
            </Button>
            <Button fab color="accent" aria-label="favorites" className={classes.button}>
                <Favorite />
            </Button>
        </div>
    )
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(style)(Navigation);