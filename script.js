const numButtons = document.getElementById("numButtons");
const existingRow = document.getElementById("existingRow");
// 3 x 3 grid for buttons 1 to 9
const grid = 3;
let digit = 0;
// creating 3 x 3 grid of number buttons from 1 to 9
for (let row=0; row<grid; row++){
    // create button row
    const buttonRow = document.createElement("div");
    buttonRow.classList.add("row");
    // create button for each row
    for (let button =1; button<=grid; button++){
        const numButton = document.createElement("button");
        digit += 1;
        numButton.innerText = digit;
        numButton.value = digit;
        numButton.id = digit;
        numButton.classList.add("number");
        buttonRow.appendChild(numButton);
    }
    numButtons.insertBefore(buttonRow,existingRow);
}

// PROCESSING BUTTON CLICKS
const questionText = document.getElementById("questionText");
const resetButton = document.getElementById("reset");
let verifiedText = ""; // question text need verificaions on each key press
let buttons = document.querySelectorAll("button"); 


let calcStatus = null; let statusDisplay = document.getElementById("status");

// lhs, rhs and operator
let num = 0; let anotherNum=0; let operator = null;
// limit to the question text based on the display width
let lengthLimit = 15;
let inputNum = 0;

let questionArray = [num,operator,anotherNum];

let clickedText; 
buttons.forEach((button) =>{
    button.addEventListener("click",function(event){
        clickedText = event.target.value;
        // number verification
        if (!isNaN(clickedText)){
            // add digit by mulitplying with 10
            inputNum = (inputNum*10) + Number(clickedText);
        }
        console.log(questionArray);
    });

});

