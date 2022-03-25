import { FC } from 'react'
import useStyles from "./styles";
import { FormControl, InputLabel, FormHelperText, Input } from "@mui/material";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Typography } from '@material-ui/core';
const LoginComponent: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.main}>
            <Grid container spacing={1} direction="column">
            <Grid item xs={12} sx={{margin:"auto"}}>
                    <Typography>Log In</Typography>
                </Grid>
                <Grid item xs={12} sx={{ margin: "auto" }}>
                    <TextField className = {classes.field} sx={{ width: "240px", input: { color: "white" } }} size="small" id="outlined-basic" label="User Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sx={{ margin: "auto" }}>
                    <TextField className = {classes.field} sx={{ width: "240px", input:{color:"white"}}} size="small" id="outlined-basic" label="Password" variant="outlined" fullWidth={true}/>
                </Grid>
                <Grid item sx={{ margin: "auto" }}>
                    <Button variant="contained" sx={{ width: "240px", height:"20px",typography: 'body2', background:"#00d9c3",color:"black",fontWeight:"bold", }}>Log In</Button>
                </Grid>
                <Grid item sx={{ margin: "auto" }}>
                    <Button variant="outlined" sx={{ width: "240px", height:"20px" ,typography: 'body2',color:"#ff263c", border:"solid", opacity:"0.8",}} size ="small">Sign up</Button>
                </Grid>
                <Grid item sx={{ margin: "auto" }}>
                    <Button variant="outlined" sx={{ width: "240px", height:"20px" ,typography: 'body2', border:"solid", opacity:"0.7",}} size ="small">Reset Password</Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default LoginComponent 