const Habit = require('../models/habits');
const mongoose = require('mongoose');
// Hbit update controller
module.exports.updateHabit = function(req, res){

    let id=req.query.id;
    Habit.findById(id, function(err,habit){
        if(err){
            console.log("Error in finding habit");
        }
        var newhabit= habit;
        let day = req.query.day;
        let val = req.query.val;
        for(let iterate in newhabit.days){
            if(iterate==day){
                if(val=="none"){
                    newhabit.days[day]="yes";
                    newhabit.streak++;
                }else if(val=="yes"){
                    newhabit.days[day]="no";
                    newhabit.streak--;
                }else{
                    newhabit.days[day]="none";
                }
            }
        }

        Habit.findByIdAndUpdate(id,newhabit,function(err,data){
            if(err){
                console.log("Error in updating habit status");
            }
            return res.redirect('back');
        })
    })

}
// Habit view page controller
module.exports.view = function(req,res){

    Habit.find({},function(err,habits){
        if(err){console.log('Error in getting habits infor');
            console.log('Error in getting the habit info ');
            return;
        }
        return res.render('views', {
            title: 'Weekly Info',
            habit_list: habits,
        });
    })
    
}