import { makeStyles } from '@material-ui/core/styles';
import { margin } from '@mui/system';


export default makeStyles(() => ({
  selection:{
    fontSize: 30,
    color:"black",
    width: "600px",
    border: "solid",
    margin: "auto",
    marginTop: "165px",
  },
  selectionButtonNo: {
    width: "250px",
    fontWeight:"bold",
    background:"black",
    color:"#BABABA",
  },
  selectionButtonYes: {
    // background: "#2a0094",
    width: "250px",
    fontWeight: "bold",
    // color:"#BABABA",
    background: "#c48600",
    color:"black"
  },
}));