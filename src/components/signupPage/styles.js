import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    main:{
        color:"white",
        width:"30%",
        minWidth:"280px",
        margin:"auto",
        paddingTop:"20px",
        borderRadius:"10px",
        paddingBottom:"20px",
        Fontcolor:"white",
        opacity:"0.9",
    },
    field:{
        '& label':{
          color:"#BABABA"  
        },
        roundedRadius:"20px",
        // '& label.Mui-focused': {
        //     color: 'white',
        //   },
        //   '& .MuiInput-underline:before': {
        //     borderBottomColor: 'white',
        //   },
        //   '& .MuiInput-underline:after': {
        //     borderBottomColor: 'white',
        //   },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#BABABA',
            },
            // '&:hover fieldset': {
            //   borderColor: 'yellow',
            // },
            // '&.Mui-focused fieldset': {
            //   borderColor: 'green',
            // },
        }
    }}));