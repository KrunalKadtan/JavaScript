let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")

function add() {
    total = num1 + num2
    sumEl.textContent = "Sum: " + total
}

function subtract() {
    total = num1 - num2
    sumEl.textContent = "Sum: " + total
}
function divide() {
    total = num1 / num2
    sumEl.textContent = "Sum: " + total
}
function multiply() {
    total = num1 * num2
    sumEl.textContent = "Sum: " + total
}

