// body background change
const bgColors=["#f4f7ff","#ade8dd", "#bae6f4", "#eba6af", "#d5cbf5", "#c8e3cd", "#d3ad9f", "#e7f8d7", "#e1a4b6", "#abcdc5"];
let bgColorsIndex=0;
document.getElementById("body-bg-change").addEventListener("click", function(){
for (let i = 0; i <10; i++) {    
    if(bgColorsIndex<bgColors.length){
        document.body.style.backgroundColor = bgColors[bgColorsIndex]; 
        bgColorsIndex+=1;
    }
    else if(bgColorsIndex>=bgColors.length){
        bgColorsIndex=0;
    }
       
}});
// day date 
const dayDateArray= new Date().toDateString().split(" ");
const day=dayDateArray.shift();
const date=dayDateArray.join(" ");
document.getElementById("day").innerHTML=`${day} ,`;
document.getElementById("date").innerText=date;
// time
const currentTime = new Date().toLocaleString().split(",")[1];
// increase number || decrease number || history add
const sixCardContainer=document.querySelector("#six-cards-container");
let idContainer=[];
sixCardContainer.addEventListener("click", function(event){
if(event.target.classList.contains("complete")){
    clickedButton=event.target;
    const id=clickedButton.id;
    idContainer.push(id);
    clickedButton.style.backgroundColor="#dfe0e9";
    clickedButton.style.color="#cfd0d9";
    clickedButton.innerText=`Completed`
    let decreaseNumber=parseInt(document.getElementById("number-to-decrease").innerText);
    let increaseNumber=parseInt(document.getElementById("number-to-increase").innerText);        
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
    if(!clickedButton.classList.contains("disabled")){
        alert("Board updated successfully.")
        decreaseNumber=decreaseNumber-1;
        document.getElementById("number-to-decrease").innerText=decreaseNumber;
        increaseNumber=increaseNumber+1;
        document.getElementById("number-to-increase").innerText=increaseNumber;
        historyContainer.appendChild(historyAdd);
    }
    else{
        decreaseNumber=decreaseNumber;
        increaseNumber=increaseNumber;
    }
    clickedButton.classList.add("disabled");
    if(idContainer.length===6){
        alert("Congrats!!! You have completed all the current tasks.")
    }
    }
})
// history remove
document.getElementById("clear-history").addEventListener("click", function(){
    document.getElementById("history-container").innerHTML="";
})
// go to blog.html
document.getElementById("blog-html").addEventListener("click", function(){
    window.location.href="blog.html";
})
// extra

        
