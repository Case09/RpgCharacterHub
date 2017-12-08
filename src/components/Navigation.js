import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';

import NoteAdd from 'material-ui-icons/NoteAdd';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Book from 'material-ui-icons/Book';
import Favorite from 'material-ui-icons/Favorite';
import Tooltip from 'material-ui/Tooltip';
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
                <Tooltip title="Add new character sheet" placement="bottom">
                    <Button fab color="primary" aria-label="new-sheet" className={classes.button}>
                        <AddIcon />
                    </Button>
                </Tooltip>
            </Link>
            <Tooltip title="My Character Sheets" placement="bottom"> 
                <Button fab color="accent" aria-label="my-sheets" className={classes.button}>
                    <Book />
                </Button>
            </Tooltip>
            <Tooltip title="Favorites" placement="bottom">
                <Button fab color="accent" aria-label="favorites" className={classes.button}>
                    <Favorite />
                </Button>
            </Tooltip>
        </div>
    )
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(style)(Navigation);