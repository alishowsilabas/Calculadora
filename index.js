function outcome(){
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