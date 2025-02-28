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
const fullDateToday=new Date();
const dayToday=fullDateToday.getDay();
const allDaysOfWeek=["Sun ,", "Mon ,", "Tues ,", "Wed ,", "Thu ,", "Fri ,", "Sat ,"];
document.getElementById("day").innerText=allDaysOfWeek[dayToday];
const monthToday=fullDateToday.getMonth();
const allMonth=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
document.getElementById("month").innerText=allMonth[monthToday];
const dateToday=fullDateToday.getDate();
document.getElementById("date").innerText=dateToday;
const yearToday=fullDateToday.getFullYear();
document.getElementById("year").innerText=yearToday;
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
const completeButtons=document.querySelectorAll(".complete");
for(let completeButton of completeButtons ){
    completeButton.addEventListener("click", function(){
    alert("Board updated Successfully.") 
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
document.getElementById("clear-history").addEventListener("click", function(){
    document.getElementById("history-container").innerHTML="";
})
document.getElementById("blog-html").addEventListener("click", function(){
    window.location.href="blog.html";
})
        
