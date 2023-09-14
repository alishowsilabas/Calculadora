function outcome() {
    let numOne = Number(document.getElementById('num-one').value)
    let numTwo = Number(document.getElementById('num-two').value)
    let total = 0

    if (document.getElementById('add').onclick)
        total = numOne + numTwo
    else if (document.getElementById('sub').onclick)
       total = numOne - numTwo
    else if (document.getElementById('mult').onclick)
        total = numOne * numTwo
    else 
        total = numOne / numTwo
    document.getElementById('resultArea').innerHTML = 'Result: ' + String(total)
    return total
}

function button(event) {
    const value = event.target.innerHTML;
    const expression = document.getElementById("expression");
    const currentValue = expression.value;
    const result = document.getElementById("result");

    if (result.value.length > 0) {
        
    }

    expression.value = currentValue + value
}

function result() {
    const expression = document.getElementById("expression").value;
    const result = document.getElementById("result");

    result.value = eval(expression)
}

function clear() {
    const expression = document.getElementById("expression");
    const result = document.getElementById("result");
    
    expression.value = "";
    result.value = "";
}