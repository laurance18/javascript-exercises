const removeFromArray = function(arr) {
    for(let i=1; i<arguments.length; i++) {
        for(let k=0; k<arr.length; k++) {
            if(arr[k] === arguments[i]) {
                arr.splice(k,1);
                k--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
