module.exports = function getZerosCount(number, base) {

    let zeros = 0;
    let n = 0;
    let a = n;
    for (let n = 1; n < base; n++){
        if (base % n === 0) {

            a = n;
        }
    }

    if (a != 1) {
        for (let i = a; number / i >= 1; i) {
            zeros += Math.floor(number / i);
            i = i * a;
        }
    } else if (a == 1){
            for (let i = base; number / i >= 1; i) {
            zeros += Math.floor(number / i)  ;
            i = i * base;
            }
    }



    return zeros;
}