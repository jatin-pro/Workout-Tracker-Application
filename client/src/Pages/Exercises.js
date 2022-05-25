import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import '../Components/Style.css'; 
import Container from '@mui/material/Container';
import axios from "axios"; 
import swal from 'sweetalert';
 


const Exercises = () => { 
   const [username , setUsername] =React.useState(''); 
   const [users , setUsers] = React.useState([]); 
   const [activity, setActivity] = React.useState("");
   const [duration, setDuration] = React.useState();
   const [date, setDate] = React.useState(new Date());
   React.useEffect(() => { 
          axios.get("http://localhost:5000/users")
          .then((res) => { 
            if(res.data.length > 0 ){ 
                  setUsers(res.data.map((user) => user.username)); 
            } 
          })
          . catch((error) => {
            console.log(error);
          });
   }, []);


    const handleChange = (event) => {
      setUsername(event.target.value);
    };
    const activityChange = (event) => {
       setActivity(event.target.value);
     
    };
    const durationChange = (event) => {
      setDuration(event.target.value);
    
   };

   const dateChange = (event) => {
    setDate(event.target.value);
   };
 const onSubmit = (event) => { 
   event.preventDefault(); 
     const exercise = { 
       username , 
       activity,
      duration,
      date
     };
     axios.post('http://localhost:5000/exercises/add', exercise)
     .then((res) => { swal({
      title: "Done!",
      text: "Get Your Fitness Goal",
      icon: "success",
      timer: 2000,
      button: false})  }); 
    setUsername("");
    setActivity("");
    setDuration("");
    setDate("");
 }
    return (
        <Container  sx={{ width: "50%" }} className = "users">
      <form onSubmit = {onSubmit}> 
        <Card variant="outlined" >
        <CardContent>
        <Box className = "selector">
      <FormControl sx={{ width : "75%" }} >
        <InputLabel >Username</InputLabel>
        <Select
        required
          value={username}
          onChange={handleChange}
          fullWidth
          label="username"
        >
         {users.map((user) => (
            <MenuItem
              key={user}
              value={user}
            >
              {user}
            </MenuItem>
          ))}
         
       </Select>
      </FormControl> 
      </Box>
      
      <Box className = "activity">
      <TextField
          required
          id="outlined-required"
          label="Enter Activity"
          onChange = {activityChange} 
          value = {activity}
          sx={{ width : "75%" }}
        />
     </Box>
     <Box className = "activity">
     <TextField
          id="outlined-number"
          label="Enter Time (in minutes)"
          type="number"
          onChange = {durationChange}
          value={duration}
          sx={{ width : "75%" }}
          InputLabelProps={{
            shrink: true,
          }}
        />
     </Box>
     <Box className = "activity">
     <TextField
        id="date"
        label="Date"
        type="date"
        onChange = {dateChange}
        value={date}
        defaultValue="yyyy-MM-dd"
        sx={{ width : "75%" }}
        InputLabelProps={{
          shrink: true,
        }}
      />
     </Box>
      </CardContent>
      <CardActions>
      <Button variant="contained"  type="submit" style = {{backgroundColor : "green", margin : "-10px 0 20px 30px" }}>ADD WORKOUT</Button>
      </CardActions>
        </Card>
     </form>
      </Container>
    ); 
   } 

   export default Exercises; 
