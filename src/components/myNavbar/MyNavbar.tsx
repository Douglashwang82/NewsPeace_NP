import React from 'react';
import { FC } from 'react';
import useStyles from './styles';
import { Avatar } from '@mui/material';
import { Typography, Grid} from '@material-ui/core';
import Button from '@mui/material/Button';
import { classicNameResolver } from 'typescript';
import logo from '../../img/reverse.png';
import Image from 'react-bootstrap/Image';
import { styled } from "@mui/material/styles";

const MyNavbar: FC = () => {
  const classes = useStyles();
  const ColorButton = styled(Button)({
    backgroundColor:"#BABABA",
    color:"black",
    lineHeight:1,
    "&:hover":{
      backgroundColor:"grey",
    }
  })
  return <>
    <Grid container justifyContent="space-between" className={classes.navsection}>
      <Grid item>
        <Grid container className={classes.logosection}>
          {/* <Grid item><Avatar src = {logo} sx={{ width: 60, height: 60 }}></Avatar></Grid> */}
          <Grid item><Image src={logo} className={classes.logo} rounded></Image></Grid>
          <Typography variant="body2">REVERSE</Typography>      
          </Grid>
      </Grid>
      <Grid item><ColorButton variant="contained" size="small">SIGN in</ColorButton></Grid>
    </Grid>
  </>
};

export default MyNavbar;
