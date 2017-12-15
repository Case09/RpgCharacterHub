import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SheetFormTitle from '../components/SheetsFormTitle';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';  
import Button from 'material-ui/Button';
import { FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';


const styles = theme => ({
    root: {
        paddingTop: 10,
        flexGrow: 1,
    },
    textField: {
        width: '100%'
    },
    textFieldSmall: {
        width: '48%',
    },
    grid: {
        background: '#f1f1f1',
        borderRadius: 3,
        margin: 5,
        padding: 20
    },
    button: {
        margin: theme.spacing.unit
    },
    checkbox: {
        margin: theme.spacing.unit
    }
})

const SheetForm = ({classes, create, onInputChange}) => {
    return (
        <div>
            <Grid className={classes.root} container justify="center" spacing={0}> 
                <SheetFormTitle />
                <Grid className={classes.grid} item xs={12} md={2}>
                    <TextField label="Name" onChange={(e) => onInputChange(e, "name")} className={classes.textField} />    
                    <TextField label="Race" onChange={(e) => onInputChange(e, "race")} className={classes.textField} />     
                    <TextField label="Gender" onChange={(e) => onInputChange(e, "gender")} className={classes.textFieldSmall} />     
                    <TextField label="Age" onChange={(e) => onInputChange(e, "age")} className={classes.textFieldSmall } style={{marginLeft: 10}} />   
                    <TextField label="Birth Sign" onChange={(e) => onInputChange(e, "birth")} className={classes.textField} />    
                    <TextField label="Class" onChange={(e) => onInputChange(e, "class")} className={classes.textField} />    
                    <TextField label="Relationship Status" onChange={(e) => onInputChange(e, "relationship")} className={classes.textField} />    
                    <TextField label="Spouse" onChange={(e) => onInputChange(e, "spouse")} className={classes.textField} />   
                    <TextField label="Weapons and Tools" onChange={(e) => onInputChange(e, "weapons")} multiline rows="5" className={classes.textField} />
                    <TextField label="Armor and Accessories" onChange={(e) => onInputChange(e, "armor")} multiline rows="5" className={classes.textField} />
                    <TextField label="Powers and Abilities" onChange={(e) => onInputChange(e, "power")} multiline rows="5" className={classes.textField} />
                </Grid>
                <Grid className={classes.grid} item xs={12} md={3}>                 
                    <TextField label="Main Skills" multiline rows="5" onChange={(e) => onInputChange(e, "mainSkills")} className={classes.textField} />   
                    <TextField label="Personality" multiline rows="10" onChange={(e) => onInputChange(e, "personality")} className={classes.textField} />
                    <TextField label="Biography" multiline rows="15" onChange={(e) => onInputChange(e, "bio")} className={classes.textField} />                    
                </Grid>
                <Grid className={classes.grid} item xs={12} md={3}>
                    <div style={{width: '100%', height: 350, background: "lightgray"}}>photo</div>
                    <TextField label="Likes" multiline rows="7" onChange={(e) => onInputChange(e, "likes")} className={classes.textField} />
                    <TextField label="Dislikes" multiline rows="7" onChange={(e) => onInputChange(e, "dislikes")} className={classes.textField} />
                </Grid>
                <Grid style={{textAlign: "center"}} item xs={12}>
                    <Link to="/dashboard" style={{textDecoration: 'none'}}>
                        <Button raised color="accent" className={classes.button}>Back</Button>
                    </Link>
                    <Button raised color="primary" className={classes.button} onClick={() => create()}>Save</Button>
                    <FormControlLabel
                        style={{verticalAlign: 'middle'}}
                        control={ <Checkbox className={classes.checkbox} value="makePublic"/> }
                        label="Make Public" />
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(SheetForm);