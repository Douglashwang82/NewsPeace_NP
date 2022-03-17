import React from 'react';
import { FC } from 'react';
import useStyles from './styles';
import { Avatar } from '@mui/material';
import { Typography, Grid, Button } from '@material-ui/core';
import { classicNameResolver } from 'typescript';

const MyNavbar: FC = () => {
  const classes = useStyles();
  return <>
    <Grid container justifyContent="space-between" className={classes.navsection}>
      <Grid item>
        <Grid container className={classes.avatartext} spacing ={1}>
          <Grid item><Avatar sx={{ width: 30, height: 30 }}></Avatar></Grid>
          <Grid item><Typography>Reverse</Typography></Grid>
        </Grid>
      </Grid>
      <Grid item><Button className={classes.signinbutton}>Sign in</Button></Grid>
    </Grid>
  </>
};

export default MyNavbar;
