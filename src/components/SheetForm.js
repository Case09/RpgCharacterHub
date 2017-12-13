import React, { Component } from 'react';

import SheetFormTitle from '../components/SheetsFormTitle';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';  

const styles = theme => ({
    root: {
        padding: 20,
        width: '100%',
        margin: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: '100%'
    },
    textFieldSmall: {
        width: '48%',
    },
    inputGrid: {
        marginTop: 20
    },
    grid: {
        background: '#f1f1f1',
        borderRadius: 3
    }
})

const SheetForm = ({classes}) => {
    return (
        <div>
            <Grid className={classes.root} container spacing={16}>
                <SheetFormTitle />
                <Grid className={classes.grid} item xs={4}>
                    <TextField label="Name" className={classes.textField} />    
                    <TextField label="Race" className={classes.textField} />     
                    <TextField label="Gender" className={classes.textFieldSmall} />     
                    <TextField label="Age" className={classes.textFieldSmall } style={{marginLeft: 10}} />   
                    <TextField label="Birth Sign" className={classes.textField} />    
                    <TextField label="Class" className={classes.textField} />    
                    <TextField label="Relationship Status" className={classes.textField} />    
                    <TextField label="Spouse" className={classes.textField} />   
                    <TextField label="Weapons and Tools" multiline rows="5" className={classes.textField} />
                    <TextField label="Armor and Accessories" multiline rows="5" className={classes.textField} />
                    <TextField label="Powers and Abilities" multiline rows="5" className={classes.textField} />
                </Grid>
                <Grid className={classes.grid} item xs={4}>                 
                    <TextField label="Main Skills" multiline rows="5" className={classes.textField} />   
                    <TextField label="Personality" multiline rows="10" className={classes.textField} />
                    <TextField label="Biography" multiline rows="15" className={classes.textField} />                    
                </Grid>
                <Grid className={classes.grid} item xs={4}>
                    <div style={{width: 300, height: 350, background: "gray"}}>photo</div>
                    <TextField label="Likes" multiline rows="7" className={classes.textField} />
                    <TextField label="Dislikes" multiline rows="7" className={classes.textField} />
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(SheetForm);