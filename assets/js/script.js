// Add habit popup function
function popup(){
    const popup =document.querySelector('#popup-container');
    popup.classList.toggle('active')
}

const time = document.getElementById('habitTime').value;
// COnverting the time in 24 hour format
function TimeChange(){
  var [h,m] = time.split(':');
  var AMPM = h >= 12 ? 'PM' : 'AM';
  Value = (h%12+12*(h%12==0))+":"+m+":"+AMPM;
  time.value =Value;

  
}
// Status update of the habit
const days = document.querySelectorAll('.btn-update-status');
// console.log(dayUpdate);
for(let i=0;i<days.length;i++){
  
  if(days[i].innerText =="no"){
    days[i].innerHTML=`<span>Not Done&nbsp;<i class="fa fa-times"></i></span>`
    days[i].style.backgroundColor="yellow";
    days[i].style.fontWeight="600";
  }else if(days[i].innerText =="yes"){
    days[i].innerHTML=`<span>Done&nbsp;<i class="fa fa-check"></i></span>`
    days[i].style.backgroundColor="green";
    days[i].style.color="white";
    days[i].style.fontWeight="600";   
  }else{
    
    days[i].innerHTML=`<span>Pending&nbsp;<i class="fa fa-exclamation"></i></span>`
    days[i].style.backgroundColor="#FFCCCC";
    days[i].style.fontWeight="600";
  }
  
}