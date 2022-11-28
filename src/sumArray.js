function sumArray(array){
    let result = 0;
    for (let num of array) {
        if (typeof num === "number") {
            if (array.length === 0) {
                result = 0;
            } else if (array.length === 1) {
                result = array[0]
            } else if (array.length > 1) {
                result += num;
            }
        } else {
            result = NaN;
        }
    }
    return result;
}


module.exports = sumArray;