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
    if (Number(fn) > Number(sn)) {
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
    let qty = Number(window.localStorage.getItem("Alldone"))
    let newQty = qty + 1;
    window.localStorage.setItem("Alldone", newQty)
    if (newQty === 3) {
        showModalwindow();
    }
    else { reloadPage() }
}

function checkCalculation(fn, sn, sg, aw) {
    if (sg === "+") {
        return Number(fn) + Number(sn) === Number(aw)
    }
    if (sg === "-") {
        return Number(fn) - Number(sn) === Number(aw)
    }
}

function showModalwindow() {
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // alert("Modal window")
    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
        window.localStorage.clear();
        answer.value = "";
    }
}


