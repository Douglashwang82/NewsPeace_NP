import { makeStyles } from '@material-ui/core/styles';
import { margin } from '@mui/system';


export default makeStyles(() => ({
  submitSkip:{
    fontSize: 30,
    color:"black",
    width: "600px",
    border: "solid",
    margin: "auto",
    marginTop: "100px",
  },
  skipButton: {
    background: "#FF65CE",
    width: "250px",
    border: "solid",
  },
  submitButton: {
    background: "cyan",
    width: "250px",
    border: "solid",
  },
}));