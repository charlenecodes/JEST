
function sumArray(array){
    for (let num of array) {
       if (typeof num === "number") {
            if (array.length > 1) {
                let sum += num;
                return sum;
            } else if {
                array.length = 0;
                return 0;
           } else if {
                array.length = 1;
                return array[0];
       } else {
            return NaN;
       }
        
    }
    
}


module.exports = sumArray;
