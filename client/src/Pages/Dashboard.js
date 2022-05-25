import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { useState } from 'react';
import '../Components/Style.css'
import axios from "axios"; 
import swal from "sweetalert"; 

const Dashboard = () => { 
      const [exercises, setExercises] = useState([]);

      React.useEffect(() => {
        axios
          .get("http://localhost:5000/exercises")
          .then((response) => {
            setExercises(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []); 
      const deleteExercise = (id) => {
        axios
          .delete("http://localhost:5000/exercises/" + id)
          .then((response) => { swal({
            title: "Done!",
            text: "Workout Deleted",
            icon: "success",
            timer: 2000,
            button: false})  });
        const del = exercises.filter((el) => el._id !== id);
        setExercises(del);
      };
 return (
    <Paper className = "papers" style = { { backgroundColor : 'rgb(239, 250, 250)'}}>
    <Typography variant="h4"  display="block" className = "typo" style = {{fontSize : '45px', fontWeight: 'bold'}}>
      Dashboard
    </Typography>
    <TableContainer className = "table">
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell><h3>Users</h3></TableCell>
            <TableCell align="right"><h3>Activity</h3></TableCell>
            <TableCell align="right"><h3>Duration</h3></TableCell>
            <TableCell align="right"><h3>Date</h3></TableCell>
            <TableCell align="right"><h3>Actions</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {exercises.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="right">
                {row.activity}
              </TableCell>
              <TableCell align="right">
                {row.duration}
              </TableCell>
              <TableCell align="right">
                {row.date.substring(0, 10)}
              </TableCell>
              <TableCell align="right">
                <Button
                  color="secondary"
                  className = "btn"
                  onClick={() => deleteExercise(row._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>
 ); 
} 

export default Dashboard; 