import { makeStyles } from '@material-ui/core/styles';
import { margin } from '@mui/system';


export default makeStyles(() => ({
  selection:{
    fontSize: 30,
    color:"black",
    width: "600px",
    border: "solid",
    margin: "auto",
    marginTop: "100px",
  },
  selectionButtonNo: {
    background: "#FF65CE",
    width: "250px",
    border: "solid",
  },
  selectionButtonYes: {
    background: "cyan",
    width: "250px",
    border: "solid",
  },
}));