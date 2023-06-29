let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let sign = document.getElementById("sign");

firstNumber.innerText = randNumb();
secondNumber.innerText = randNumb();

let fn = firstNumber.innerText;
let sn = secondNumber.innerText;

sign.innerText = changeSign();
let sg = sign.innerText;

function randNumb() {
    return Math.floor(Math.random() * 100) + 1;
}

function checkAnswer() {
    let answer = document.getElementById("answer");
    let aw = answer.value;

    if (checkCalculation(fn, sn, sg, aw)) {
        wellDone()
    }
    else {
        tryAgain();
    }
}

function reloadPage() {
    window.location.reload()
}

function changeSign() {
    if (fn > sn) {
        return "-";
    }
    else { return "+" }
}

function tryAgain() {
    alert("Спробуй ще раз :)")
    answer.value = "";
    console.log("false")
}

function wellDone() {
    alert("Ти молодець!")
    reloadPage()
}

function checkCalculation(fn, sn, sg, aw) {
    if (sg === "+") {
        return Number(fn) + Number(sn) === Number(aw)
    }
    if (sg === "-") {
        return Number(fn) - Number(sn) === Number(aw)
    }
}