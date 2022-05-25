const express = require("express"); 
const mongoose = require("mongoose"); 
const cors  = require("cors"); 
const usersRouter = require("./routes/users"); 
const exercisesRouter = require("./routes/exercises"); 
const app = express(); 
require("dotenv").config();
const path = require("path");

const PORT = process.env.PORT || 5000; 
 
app.use(cors()); 
app.use(express.json()); 

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, 
{useNewUrlParser : true}).then(() => console.log("Database is Connected"))
    .catch(err => console.log("error occcured"));
    
   
  

app.use("/users", usersRouter); 
app.use("/exercises" , exercisesRouter); 


app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(PORT , () => { 
  console.log(`app is running on :${PORT}`); 
}); 
