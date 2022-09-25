const reverseString = function(str) {
    string_arr = str.split("")
    new_str = "";
    for(let i = str.length; i--, i>=0;) {
        new_str += string_arr[i];
    }
    return new_str;
};

// Do not edit below this line
module.exports = reverseString;
