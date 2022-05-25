const router = require("express").Router(); 
let Exercise = require("../modals/Exercise"); 

router.get('/' , (req, res) => { 
   Exercise.find().then(exercise => res.json(exercise))
   .catch(err => res.status(400).json('Error: ' + err));
})

router.post('/add', (req, res) =>{ 

     const username = req.body.username; 
    const activity = req.body.activity; 
    const duration = Number(req.body.duration); 
    const date =  Date.parse(req.body.date); 


    const newExercise = new Exercise({
        username , 
        activity , 
        duration , 
        date,
    }); 
    newExercise.save().then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.get('/:id' , (req,res) => { 
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
}); 

router.delete('/:id' , (req, res) =>{ 
    Exercise.findByIdAndRemove(req.params.id).then(() => res.json('Exercise Deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
}); 

router.post('/update/:id' , (req, res) => { 

    Exercise.findById(req.params.id).then(
        exercise => { 
            exercise.username = req.body.username;
            exercise.activity = req.body.activity;
            exercise.duration= Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);
      
            exercise.save()
              .then(() => res.json('Exercise updated!'))
              .catch(err => res.status(400).json('Error: ' + err));
          })
          .catch(err => res.status(400).json('Error: ' + err));
      });
      
  module.exports = router;