/*body background color change */
const bgColors=["#f4f7ff","#ade8dd", "#e7f8d7", "#c8e3cd", "#eba6af", "#bae6f4", "#d3ad9f", "#e1a4b6", "#abcdc5", "#d5cbf5"];
let bgColorsIndex=0;
document.getElementById("body-bg-change").addEventListener("click", function(){
    document.body.style.backgroundColor=bgColors[bgColorsIndex];
    for(i=0; i<bgColors.length; i++){
        if(bgColorsIndex===bgColors.length){
            bgColorsIndex=0;
        }
        else{
            bgColorsIndex=bgColorsIndex+1;
        }       
    }
})
// ----------------------------------------------------------------------------------------------
/* main section top right part day determine */
const fullDateToday=new Date();
const dayToday=fullDateToday.getDay();
const allDaysOfWeek=["Sun ,", "Mon ,", "Tues ,", "Wed ,", "Thu ,", "Fri ,", "Sat ,"];
document.getElementById("day").innerText=allDaysOfWeek[dayToday];

/* main section top right part date determine */
// month
const monthToday=fullDateToday.getMonth();
const allMonth=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
document.getElementById("month").innerText=allMonth[monthToday];
// date
const dateToday=fullDateToday.getDate();
document.getElementById("date").innerText=dateToday;
// year
const yearToday=fullDateToday.getFullYear();
document.getElementById("year").innerText=yearToday;
// time
const hourToday=fullDateToday.getHours();
const minuteToday=fullDateToday.getMinutes();
const secondToday=fullDateToday.getSeconds();
let currentHour=hourToday;
if(hourToday>12){
 currentHour=hourToday-12;
 ampm="PM";
}
else{
 currentHour=hourToday;
 ampm="AM";
}
let currentTime=currentHour+":"+minuteToday+":"+secondToday+" "+ampm
// -------------------------------------------------------------------------------------------

/* decrease and increase number after click, alert, add history */
const completeButtons=document.querySelectorAll(".complete");
for(let completeButton of completeButtons ){
    completeButton.addEventListener("click", function(){
    //alert
    alert("Board updated Successfully.") 
    //decrease increase
    const id=completeButton.id;  
    const clickedButton=document.getElementById(id);
    clickedButton.style.backgroundColor="#dfe0e9";
    clickedButton.style.color="#cfd0d9";
    let decreaseNumber=parseInt(document.getElementById("number-to-decrease").innerText);
    let increaseNumber=parseInt(document.getElementById("number-to-increase").innerText);
    if(!clickedButton.classList.contains("disabled")){
        decreaseNumber=decreaseNumber-1;
        document.getElementById("number-to-decrease").innerText=decreaseNumber;
        increaseNumber=increaseNumber+1;
        document.getElementById("number-to-increase").innerText=increaseNumber;
    }
    else{
        decreaseNumber=decreaseNumber;
        increaseNumber=increaseNumber;
    }
    // add history
    const titleParagraph=document.getElementById(id+"-title").innerText; 
    const historyContainer=document.getElementById("history-container");
    const historyAdd=document.createElement("p");
    historyAdd.style.borderRadius="12px";
    historyAdd.style.backgroundColor="#f4f7ff";
    historyAdd.style.padding="10px 8px";
    historyAdd.style.marginBottom="20px";

    historyAdd.innerHTML=`
    <span>You have completed the task ${titleParagraph} at ${currentTime}</span>
    `
    historyContainer.appendChild(historyAdd);
    clickedButton.classList.add("disabled");
})}

/* clear history*/
document.getElementById("clear-history").addEventListener("click", function(){
    document.getElementById("history-container").innerHTML="";
})

        
