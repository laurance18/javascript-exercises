const palindromes = function (str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    str = str.replace(/\s{2,}/g," ");
    str = str.replace(/ /g,'');
    str = str.toLowerCase()
    str.trim();
    return(str == str.split("").reverse().join(""));
};

// Do not edit below this line
module.exports = palindromes;
