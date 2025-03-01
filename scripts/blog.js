document.getElementById("back").addEventListener("click", function(){
    window.location.href="index.html";
})



const parentDivOne=document.querySelector("#delegate-html");
const newDivOne=document.createElement("div");
const htmlCodeOne=`<div id="fruit-div">
                <button class="fruit cursor-pointer btn" id="one">Apple</button>
                <button class="fruit cursor-pointer btn" id="two">Banana</button>
                <button class="fruit cursor-pointer btn" id="three">Mango</button>
                <button class="fruit cursor-pointer btn" id="four">Orange</button>
            </div>`
newDivOne.innerText=htmlCodeOne;
parentDivOne.appendChild(newDivOne);



const parentDivTwo=document.querySelector("#child-handler");
const newDivTwo=document.createElement("div");
const codeTwo= `let fruits=document.querySelectorAll(".fruit");

                for(let fruit of fruits){

                fruit.addEventListener("click", function(event){

                let text=event.target.innerText;

                alert(text);

                })}`
newDivTwo.innerText=codeTwo;
parentDivTwo.appendChild(newDivTwo);



const parentDivThree=document.querySelector("#parent-handler");
const newDivThree=document.createElement("div");
const codeThree= `let fruitsList=document.querySelector("#fruit-div");

                  fruitsList.addEventListener("click", function(event){

                  let btn=event.target.tagName;

                  if(btn='BUTTON'){

                  alert(event.target.innerText);

                  }})`
newDivThree.innerText=codeThree;
parentDivThree.appendChild(newDivThree);










let fruitsList=document.querySelector("#fruit-div");
fruitsList.addEventListener("click", function(event){
    let btn=event.target.tagName;
    if(btn='BUTTON'){
        alert(event.target.innerText);
    }})