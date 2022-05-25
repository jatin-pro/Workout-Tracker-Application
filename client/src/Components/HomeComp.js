import { Button } from '@mui/material';
import { styled } from '@mui/system';
import {useNavigate } from "react-router-dom";
import './Style.css'; 
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const MyComponent = styled('div')({
    backgroundImage : "url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    height:'30vh',
    backgroundPosition: "center",
        marginTop:'-80px',
        marginBottom:'-40px',
        fontSize:'50px',
        backgroundSize: 'cover',
        marginRight : ' -10px',
        marginLeft : '-10px',
        backgroundRepeat: 'no-repeat',
    textAlign : 'center',
    padding: 200,
    top: 200,
    objectFit:'cover',
  
  });

const HomeComp = () => { 
  
  let navigate = useNavigate(); 
  const navi = () => { 
          navigate("./user");
  }
return (
        <MyComponent>
        <Typography color="white"  style = { {fontSize:'4vw', margin : '15px', }}className="lines" align="center" variant="h2" marked="center">
       Start The Workout Today
      </Typography>
      <Typography color="white"className = "texts" style = { {fontSize:'2.5vw', margin : '7px',}} align="center" variant="h5" marked="center">
      Track Your Fitness Activity And Enjoy The Workout
      </Typography>
      
       <Button variant="outlined"  align="center"  style = {{color : 'red' , textAlign : 'center', marginLeft : '-10px' , border: '2px solid crimson', margin: '25px', fontSize : '1.2vw'}} 
        onClick = {() => navi()}>Start Now </Button>
     
     </MyComponent>
      
)
}
export default HomeComp;

