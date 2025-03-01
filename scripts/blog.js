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



const parentDivFour=document.querySelector("#container");
const newDivFour=document.createElement("div");
const codeFour= `<div id="text-container">

                        <p id="p-one">Create yourself. Be skilled.</p>

                        <p>Coding, Digital marketing, DevOps, Machine Learning are good skills now a days.</p>

                        <p>HTML, CSS and Javascript are beginning path for a frontend developer.</p>
                    
                 </div>`
newDivFour.innerText=codeFour;
parentDivFour.appendChild(newDivFour);


const parentDivFive=document.querySelector("#container-two");
const newDivFive=document.createElement("div");
const codeFive= `const newCreateDiv=document.createElement("div");                
                 const newCreateParagraph=document.createElement("p");
                 `
newDivFive.innerText=codeFive;
parentDivFive.appendChild(newDivFive);


const parentDivSix=document.querySelector("#container-three");
const newDivSix=document.createElement("div");
const codeSix= `const textContainer=document.querySelector("#text-container");

                 newCreateParagraph.innerText="Hello! This is a created paragraph."
                 textContainer.appendChild(newCreateParagraph);
`
newDivSix.innerText=codeSix;
parentDivSix.appendChild(newDivSix);


const parentDivSeven=document.querySelector("#container-four");
const newDivSeven=document.createElement("div");
const codeSeven= `newCreateDiv.innerText="Hello! This is a created div."
                  textContainer.insertBefore(newCreateDiv, textContainer.firstElementChild);`
newDivSeven.innerText=codeSeven;
parentDivSeven.appendChild(newDivSeven);


const parentDivEight=document.querySelector("#container-five");
const newDivEight=document.createElement("div");
const codeEight= `const removeParagraph=document.querySelector("#p-one");
                  textContainer.removeChild(removeParagraph);`
newDivEight.innerText=codeEight;
parentDivEight.appendChild(newDivEight);



const textContainer=document.querySelector("#text-container");
console.log(textContainer);

const newCreateDiv=document.createElement("div");
newCreateDiv.innerText="Hello! This is a created div."
textContainer.insertBefore(newCreateDiv, textContainer.firstElementChild);

const newCreateParagraph=document.createElement("p");
newCreateParagraph.innerText="Hello! This is a created paragraph."
textContainer.appendChild(newCreateParagraph);

const removeParagraph=document.querySelector("#p-one");
textContainer.removeChild(removeParagraph);

