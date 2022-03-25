import { makeStyles } from '@material-ui/core/styles';
import { margin } from '@mui/system';


export default makeStyles(() => ({
  selection:{
    fontSize: 30,
    marginTop: "151px",
  },
  selectionButtonNo: {
    width: "130px",
    border:"solid",
    color:"#ff263c",
    opacity: "0.7",
    fontWeight:"Bold",

    
  },
  selectionButtonYes: {
    width: "130px",
    fontWeight:"Bold",
    color:"black",
    background:"#00d9c3",
    opacity:"0.8",
  },
}));