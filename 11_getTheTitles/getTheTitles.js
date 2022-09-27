const getTheTitles = function(arr) {
    let final = [];
    arr.forEach(function (item) {
        final.push(item['title'])
    });
    return final;
};

// Do not edit below this line
module.exports = getTheTitles;
