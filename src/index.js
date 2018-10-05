module.exports = function getZerosCount(number, base) {
    let [simpleNum, arrs, result, preResult, si, zero] = [0, [], [], [],  base, {}];
    for (let n = 2; n <= base; n++ ){
        simpleNum = si % n;
        if(simpleNum === 0){
            arrs.push(n);
            si = si / n;
            n--;
        }
    }
    for (let n = 0; n < arrs.length; n++ ){
        let tempNumber = number;
        preResult[n] = 0;
        for (tempNumber; tempNumber > 0; tempNumber) {
            tempNumber = Math.floor(tempNumber / arrs[n]);
            preResult[n] += tempNumber;
        }
    }
    preResult.forEach(a => {
       (zero[a] !== undefined)? zero[a]++ : zero[a] = 1;
    });
    for(let key in zero){
        result.push(Math.floor(+key/zero[key]));
    }
    result.sort((a, b) => a - b);
    return result[0];
};