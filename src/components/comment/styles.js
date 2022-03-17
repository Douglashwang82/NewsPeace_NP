import { makeStyles } from '@material-ui/core/styles';
import { color } from '@mui/system';

export default makeStyles(() => ({
    commentCard:{
        bg:"red",
        background:"yellow",
    },
    p:{
        fontFamily:"system-ui",
        color:"#BABABA",
    },
    trailsText:{
        color:"white"
    },
    aCard: {
        width: '50%', 
        minWidth:"250px",
        margin:"auto" , 
        backgroundColor: "#121212",
        borderStyle:"solid", 
        borderColor:"#1d2d33", 
        borderWidth:"2px",
        marginTop:"10px",
    }
}));