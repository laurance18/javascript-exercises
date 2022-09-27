const fibonacci = function(pos) {
    if(pos<0) return 'OOPS';
    pos = Number(pos) 
    
    arr = [1,1];
    initLength = arr.length;
    if(arr[pos] === undefined){
        for(let i = 0; i<pos-initLength; i++){
            firstNum = arr[arr.length-2]
            lastNum = arr[arr.length-1]
            arr.push(firstNum+lastNum);
        }
        return arr[pos-1]
    }
    return arr[pos-1]
};

// Do not edit below this line
module.exports = fibonacci;
