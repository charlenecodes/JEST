function sumArray(array){
    let arrayLength = array.length
    for (let num of array) {
       if (typeof num === "number") {
            if (arrayLength > 1) {
                let sum;
                sum += num;
                return sum;
            } else if (arrayLength = 0) {
                return 0;
            } else if (arrayLength = 1) {
                return array[0];
            }
        } else {
            return NaN;
        }
    }
}


module.exports = sumArray;
