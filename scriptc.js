let display = document.getElementById('display');

function appendcharacter(character) {
    if (display.innerText=== '0'&& character !=='.') {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
}

function cleardisplay() {
    display.innerText = '0';

}

function calculateresult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'erro';
    }
}