function outcome(){
    let numOne = document.getElementById('num-one').value
    let numTwo = document.getElementById('num-two').value
    let total = 0

    if(document.getElementById('box1')){
        total = numOne + numTwo
    } else if (document.getElementById('box2')){
        total = numOne - numTwo
    } else if (document.getElementById('box3')){
        total = numOne * numTwo
    } else if (document.getElementById('box4')){
        total = numOne / numTwo
    }
    return total
}