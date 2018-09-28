module.exports = function getZerosCount(number, base) {
    let zeros = 0;
    let n = 0;
    let a = n;
    let array = [];
    for (let n = 1; n < base; n++){
        if (base % n === 0) {
            a = n;
            array.push(a);
        }
    }
    if (a !== 1 && Math.pow(array[1], array.length - 1) !== array[array.length - 1]) {
        for (let i = a; number / i >= 1; i) {
            zeros += Math.floor(number / i);
            i = i * a;
        }
    } else if (a === 1){
            for (let i = base; number / i >= 1; i) {
                zeros += Math.floor(number / i)  ;
                i = i * base;
            }
    } else if  (Math.pow(array[1], array.length - 1) === array[array.length - 1]){
            for (let i = array[1]; number / i >= 1; i) {
                zeros += Math.floor(number / i) / array.length ;
                i = i * array[1];
            }
    }
    return Math.floor(zeros);
}