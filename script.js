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
        numButton.classList.add("number");
        buttonRow.appendChild(numButton);
    }
    numButtons.insertBefore(buttonRow,existingRow);
}



function operate(num,operator,anotherNum){
    operators = {
        "+" : num + anotherNum ,
        "-" : num - anotherNum,
        "*" : num * anotherNum,
        "/" : num / anotherNum
    }
    return operators[operator];
}


let qt = document.getElementById("questionText");

const clearButton = document.getElementById("reset");
clearButton.addEventListener("click",function() {
    qt.textContent = "";
});


