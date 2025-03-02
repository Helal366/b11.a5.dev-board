document.getElementById("back").addEventListener("click", function(){
    window.location.href="index.html";
})


const parentIdOne="#delegate-html"
const innerCodeOne=`<div id="fruit-div">
                     <button class="fruit cursor-pointer btn" id="one">Apple</button>
                     <button class="fruit cursor-pointer btn" id="two">Banana</button>
                     <button class="fruit cursor-pointer btn" id="three">Mango</button>
                     <button class="fruit cursor-pointer btn" id="four">Orange</button>
                     </div>`
myInsertDiv(parentIdOne, innerCodeOne);

const parentIdTwo="#child-handler"
const innerCodeTwo=`let fruits=document.querySelectorAll(".fruit");
                    for(let fruit of fruits){
                    fruit.addEventListener("click", function(event){
                    let text=event.target.innerText;
                    alert(text);
                    })}`
myInsertDiv(parentIdTwo, innerCodeTwo);

const parentIdThree="#parent-handler"
const innerCodeThree=`let fruitsList=document.querySelector("#fruit-div");
                      fruitsList.addEventListener("click", function(event){
                      let text=event.target.innerText;
                      alert(text);
                      })`
myInsertDiv(parentIdThree, innerCodeThree);

const parentIdFour="#container"
const innerCodeFour=`<div id="text-container">
                        <p id="p-one">Create yourself. Be skilled.</p>
                        <p>Coding, Digital marketing, DevOps, Machine Learning are good skills now a days.</p>
                        <p>HTML, CSS and Javascript are beginning path for a frontend developer.</p>        
                    </div>`
myInsertDiv(parentIdFour, innerCodeFour);

const parentIdFive="#container-two"
const innerCodeFive=`const newCreateDiv=document.createElement("div");                
                     const newCreateParagraph=document.createElement("p");`
myInsertDiv(parentIdFive, innerCodeFive);


const parentIdSix="#container-three"
const innerCodeSix=`const textContainer=document.querySelector("#text-container");
                    newCreateParagraph.innerText="Hello! This is a created paragraph."
                    textContainer.appendChild(newCreateParagraph);`
myInsertDiv(parentIdSix, innerCodeSix);


const parentIdSeven="#container-four"
const innerCodeSeven=`newCreateDiv.innerText="Hello! This is a created div."
                      textContainer.insertBefore(newCreateDiv, textContainer.firstElementChild);`
myInsertDiv(parentIdSeven, innerCodeSeven);

const parentIdEight="#container-five"
const innerCodeEight=`const removeParagraph=document.querySelector("#p-one");
           textContainer.removeChild(removeParagraph);`
myInsertDiv(parentIdEight, innerCodeEight);


function myInsertDiv(parentId, code){
const parentDiv=document.querySelector(parentId);
const newDiv=document.createElement("div");
newDiv.innerText=code;
parentDiv.appendChild(newDiv);
}




