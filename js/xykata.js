// The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.
//
//     The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.
//
//     Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.
//
// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
// Fundamentals

// Solution:
// function chromosomeCheck(sperm) {
//     if (sperm === "XX") {
//         return "Congratulations! You're going to have a daughter."
//     } else if (sperm === "XY") {
//         return "Congratulations! You're going to have a son."
//     }

let cubeChecker = function(volume, side){
    let cubed = Math.pow(side,3);
    if (side <= 0 || cubed === 0 ) {
        return false;
    }
    if (cubed === volume) {
        return true
    }
    else return false
}
console.log(cubeChecker(0,0))