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


let queText = document.getElementById("questionText");
const ansText = document.getElementById("ansText");



const clearButton = document.getElementById("reset");
clearButton.addEventListener("click",function() {
    queText.textContent = ""; ansText.textContent = "";
});

// there are 3 types of buttons : 0 to 9, = , and operators
const ansBtn = document.getElementById("ans");

let contents;
ansBtn.addEventListener("click",function(){
    for (let i of queText.textContent){
        if (["+","-","*","/"].includes(i)) {
            contents = queText.textContent.split(i);
            let one = parseFloat(contents[0]);
            let two = parseFloat(contents[1]);
            ansText.textContent = (operate(one,i,two));
        }
    }
    
});