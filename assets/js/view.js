// Getting current month from moment.js
let month = moment().format("MMMM YYYY");
// console.log(month);
// Setting the month name in the corresponding span elememt
document.getElementById('month-name').innerText=month;

// Days elememt
var wDays = document.getElementsByClassName('day-name');
// To Display name and date in the container
for(let i=0;i<wDays.length;i++){
    if(i==0){
        wDays[i].innerText="Today/"+moment().subtract(i, 'days').format("Do");
        wDays[i].style.fontWeight="700";
    }else{
        wDays[i].innerText=moment().subtract(i, 'days').format("ddd/Do");
    }
}

// Task Status for the current week related
const days = document.getElementsByClassName('days');

for(let i=0;i<days.length;i++){
    if(days[i].innerText=='no'){
        days[i].innerHTML=`<span>Not Done&nbsp;<i class="fa fa-times"></i></span>`;
        days[i].style.backgroundColor="Red";
        days[i].style.color="white";
        days[i].style.fontWeight="700";

    }else if(days[i].innerText =="yes"){
        days[i].innerHTML=`<span>Done&nbsp;<i class="fa fa-check"></i></span>`;
        days[i].style.backgroundColor="green";
        days[i].style.color="white";
        days[i].style.fontWeight="700";
        
    }else{
        days[i].innerHTML=`<span>Pending&nbsp;<i class="fa fa-exclamation"></i></span>`;
        days[i].style.backgroundColor="Yellow";
        days[i].style.color="Black";
        days[i].style.fontWeight="700";
    }
}