const repeatString = function(str, num) {
    let return_string = "";
    if(num<0) return "ERROR";
    
    for (let i = 0; i++, i<num+1;) {
        return_string += str;
    }
    return return_string;
};

// Do not edit below this line
module.exports = repeatString;
