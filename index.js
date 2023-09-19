let currentExpression = "";
let currentResult = "";

function action(event) {
    const value = event.target.innerHTML;
    if (currentResult !== "" && "+-*/".includes(value)){
        currentExpression = currentResult + value;
        currentResult = ""
    } else if (value === "C"){
        clear()
    } else if (value === "←"){
        backSpace()
    } else {
        if ((currentExpression === "0" && value !== ".") || currentResult.length !== 0){
            currentExpression = value;
            currentResult = "";
        } else {
            currentExpression += value;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const expressionElement = document.getElementById("expression");
    expressionElement.value = currentExpression
    document.getElementById("result").value = currentResult
    const event = new Event("change", {bubbles: true});
    expressionElement.dispatchEvent(event);
}

function result() {
    try {
        currentResult = eval(currentExpression)
        if (Number.isNaN(currentResult)) throw new Error();
    } catch(error) {
        currentResult = "error"
    }
    updateDisplay()
}

function clear() {
    currentExpression = "0"
    currentResult = ""

    updateDisplay()
}

function backSpace() {
    if (currentExpression !== "0"){
        currentExpression = currentExpression.slice(0, -1)
    }
    updateDisplay();
}

document.getElementById("expression").onchange = function (){
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
}