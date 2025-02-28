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
