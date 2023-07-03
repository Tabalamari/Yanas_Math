export function checkCalculation(fn, sn, sg, aw) {
    if (sg === "+") {
        return Number(fn) + Number(sn) === Number(aw)
    }
    if (sg === "-") {
        return Number(fn) - Number(sn) === Number(aw)
    }
}

export function randNumb() {
    return Math.floor(Math.random() * 100) + 1;
}

export function changeSign(fn, sn) {
    if (fn > sn) {
        return "-";
    }
    else { return "+" }
}

