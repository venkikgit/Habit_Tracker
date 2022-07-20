const Habit = require('../models/habits');
const mongoose = require('mongoose');
// Home page controller
module.exports.home = function(req,res){

    Habit.find({},function(err,habits){
        if(err){console.log('Error in getting habits infor');
            console.log('Error in getting the habit info ');
            return;
        }
        return res.render('home', {
            title: 'Habit Tracker',
            habit_list: habits,
        });
    })
    
}
// Controller to create Habit
module.exports.createHabit = function(req,res){
    let days = {
        one:"none",
        two:"none",
        three:"none",
        four:"none",
        five:"none",
        six:"none",
        seven:"none",
    }
    Habit.create({
        habit: req.body.habit,
        description: req.body.description,
        frequency: req.body.frequency,
        time: req.body.time,
        days: days
    },function(err,newHabit){
        if(err){
            console.log('Error in creating habit',err);
            return;
        }
        
        console.log(newHabit);
        return res.redirect('back');
    });
}
// Delete controllerfor habit
module.exports.deleteHabit = function(req,res){
  let id = req.query.id;
  console.log(id);
  Habit.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Error in deleting Habit");
            return;
        }
        return res.redirect('back');

    });
  
}