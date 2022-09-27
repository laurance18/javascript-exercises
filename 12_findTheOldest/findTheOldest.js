const findTheOldest = function(arr) {
    let ages = [];
    arr.forEach(function (person) {
        String(typeof(person['yearOfDeath'])) == 'undefined' ? person['yearOfDeath'] = 2022 : console.log('')
        ages.push(person['yearOfDeath']-person['yearOfBirth'])
    });
    return arr[ages.indexOf(Math.max(...ages))];
};

// Do not edit below this line
module.exports = findTheOldest;
