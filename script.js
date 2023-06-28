let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let sign = document.getElementById("sign");

function randNumb() {
    return Math.floor(Math.random() * 100) + 1;
}

firstNumber.innerText = randNumb();
secondNumber.innerText = randNumb();


let fn = firstNumber.innerText;
let sn = secondNumber.innerText;

sign.innerText = changeSign();
let sg = sign.innerText;

function checkAnswer() {
    let answer = document.getElementById("answer");
    let aw = answer.value;

    if (sg === "+") {
        if (Number(fn) + Number(sn) === Number(aw)) {
            alert("Ти молодець!")
            reloadPage()
        }
        else {
            alert("Спробуй ще раз :)")
            answer.value = "";
            console.log("false")
        }
    }
    else {
        if (Number(fn) - Number(sn) === Number(aw)) {
            alert("Ти молодець!")
            reloadPage()
        }
        else {
            alert("Спробуй ще раз :)")
            answer.value = "";
            console.log("false")
        }

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
