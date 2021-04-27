let zero = document.getElementById('zero');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let negative = document.getElementById('negative');
let decimal = document.getElementById('decimal');
var initial = 0;
var second = 0;
var hasDecimal = false;

zero.onclick = function() {
    if (initial !== 0) {
        document.getElementById("result").innerHTML = initial.toString() + "0"; 
    }
}

one.onclick = function() {
    result = "1";
    resultDisplay();
}
two.onclick = function() {
    result = "2";
    resultDisplay();
}
three.onclick = function() {
    result = "3";
    resultDisplay();
}
four.onclick = function() {
    result = "4"
    resultDisplay();
}
five.onclick = function() {
    result = "5"
    resultDisplay();
}
six.onclick = function() {
    result = "6"
    resultDisplay();
}
seven.onclick = function() {
    result = "7"
    resultDisplay();
}
eight.onclick = function() {
    result = "8"
    resultDisplay();
}
nine.onclick = function() {
    result = "9"
    resultDisplay();
}
decimal.onclick = function() {
    if (hasDecimal === false) {
        firstDecimal = true
    }
    hasDecimal = true;  
    result = ".";
    resultDisplay();
}

function resultDisplay() {
    if (initial.toString().length <= 16 && hasDecimal === false) {
        initStr = initial.toString();
        if (initial === 0) {
            initStr = result;
        }else {
            initStr = initStr + result;
        }
        initial = parseInt(initStr);
        document.getElementById("result").innerHTML = initStr;
    } else if (initial.toString().length <= 17 && hasDecimal) {
        initStr = initial.toString();
        if (result === ".") {
            console.log("pog");
            initStr = initStr + ".";
        } else if (result != "." && firstDecimal === true); {
            console.log(firstDecimal);
            initStr = initStr + "." + result;
            firstDecimal = false;
            initial = parseInt(initStr);
        } else if (result !== "." && firstDecimal === false) {
            initStr = initStr + result;
            initial = parseInt
        }
        document.getElementById("result").innerHTML = initStr;
    }
    return;
}
