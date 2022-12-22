const screenDisplay = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');




function calculate(button) {
    console.log(button)
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)) )