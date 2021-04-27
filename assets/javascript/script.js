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
var hasZero = false;
var zeroPressed = 0;
var initialNumber = true;

zero.onclick = function() {
    if (initial !== 0 && !hasDecimal) {
        result = "0";
        resultDisplay(); 
    }
    if (hasDecimal) {
        zeroPressed += 1;
        result = "0";
        hasZero = true;
        resultDisplay();
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

function initialFunc() {
    if (initial.toString().length <= 20 && hasDecimal === false) {
        initStr = initial.toString();
        if (initial === 0) {
            initStr = result;
        }else {
            initStr = initStr + result;
        }
        initial = parseInt(initStr);
        document.getElementById("result").innerHTML = initStr;
    } else if (initial.toString().length <= 17 && hasDecimal) {
        if (result !== "0") {
            initStr = initial.toString();
        }
        if (result === ".") {
            initStr = initStr + ".";
        } else if (result != "." && firstDecimal === true && !(hasZero)) {
            initStr = initStr + "." + result;
            firstDecimal = false;
            initial = parseFloat(initStr);
        } else if (result !== "." && firstDecimal === false && !(hasZero)) {
            console.log(initial)
            for (i in initStr) {
                if (initStr[i] === "e") {
                    console.log(initStr[i+2], initStr[i+3], "0".repeat(parseInt(initStr[i+2] + initStr[i+3])))
                    initStr = "." + "0".repeat(parseInt(initStr[i+2] + initStr[i+3])) + initStr[0]
                    break;
                }
            }
            initStr = initStr + result;
            initial = parseFloat(initStr);
        } else if (result === "0" && hasZero) {
            initStr = initStr + result;
        } else if (firstDecimal && hasZero && result !== "0") {
            initStr = initStr + "." + ("0".repeat(zeroPressed)) + result;
            hasZero = false;
            firstDecimal = false;
            initial = parseFloat(initStr)
        }else if (hasZero === true && result !== "0") {
            initStr = initStr + ("0".repeat(zeroPressed)) + result;
            initial = parseFloat(initStr);
            hasZero = false;
            zeroPressed = 0;
        }
        document.getElementById("result").innerHTML = initStr;
    }
    return;
}

function secondFunc() {
    if (second.toString().length <= 20 && hasDecimal === false) {
        secStr = second.toString();
        if (second === 0) {
            secStr = result;
        }else {
            secStr = secStr + result;
        }
        second = parseInt(secStr);
        document.getElementById("result").innerHTML = secStr;
    } else if (second.toString().length <= 17 && hasDecimal) {
        if (result !== "0") {
            secStr = second.toString();
        }
        if (result === ".") {
            secStr = secStr + ".";
        } else if (result != "." && firstDecimal === true && !(hasZero)) {
            secStr = secStr + "." + result;
            firstDecimal = false;
            second = parseFloat(secStr);
        } else if (result !== "." && firstDecimal === false && !(hasZero)) {
            secStr = secStr + result;
            second = parseFloat(secStr);
        } else if (result === "0" && hasZero) {
            secStr = secStr + result;
        } else if (firstDecimal && hasZero && result !== "0") {
            secStr = secStr + "." + ("0".repeat(zeroPressed)) + result;
            hasZero = false;
            firstDecimal = false;
            second = parseFloat(secStr)
        }else if (hasZero === true && result !== "0") {
            secStr = secStr + ("0".repeat(zeroPressed)) + result;
            second = parseFloat(secStr);
            hasZero = false;
        }
        document.getElementById("result").innerHTML = secStr;
    }
    return;
}

function resultDisplay() {
    if (initialNumber) {
        initialFunc();
    } else {
        secondFunc();
    }
}