var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber > 10) {
        currentNumber = 10;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}
function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < -20) {
        currentNumber = -20;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}