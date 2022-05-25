import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../Components/Style.css'; 
import Container from '@mui/material/Container';
import { useState } from 'react';
import axios from 'axios'; 
import swal from "sweetalert"

const User = () => { 
  const [username, setUsername] = useState("");
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username
    };
    
    axios.post('http://localhost:5000/users/add', user)
    .then((response) => { swal({
      title: "Done!",
      text: "User Enrolled",
      icon: "success",
      timer: 2000,
      button: false})  });
    
    setUsername("");
  };
  
 return (
   <>
     <Container  sx={{ width: "50%" }} className = "users">
      <form onSubmit={onSubmit}>
      <Card variant="outlined" >
      <CardContent>
      <Box className = "usertext"> 
          CREATE USER
      </Box>
      <TextField id="standard-basic"  onChange={handleChange} label="Enter Username" variant="standard" className= "usertextfield" value = {username}/> 
    </CardContent>
    <CardActions>
    <Button variant="contained" type = "submit"  style = {{backgroundColor : "green" }}>CREATE USER</Button>
    </CardActions>
      </Card>
      </form>
    </Container>
     </>
 ); 
} 

export default User; 