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

let firstNum = 0; let secondNum=0;

buttons.forEach((button) =>{
    button.addEventListener("click",function(event){
        /*
        the buttons are classified based on their accomodation frequency on the question text 
            number : 0,00, 1 to 9
            one-time : ., operators
        */
       // there should be a limit to the question text based on the display width
       // until the operator is selected, the number should be assigned to 1st num; after that , 2nd num
        const clickedText = event.target.value;
        console.log(typeof(clickedText));
        const clickedClass = event.target.value;
        verifiedText += clickedText;
        questionText.textContent = verifiedText;
    });
});

