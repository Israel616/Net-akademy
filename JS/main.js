console.log('alfa version');
//Do a function that can count numbers
//Create a function that can count the number of words in a string
//Create a function that can count the number of characters in a string
function countNumbers(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            count++;
        }
    }
    return count;
}
console.log(countNumbers('123456789'));
//create a const that get a button by id
var button = document.getElementById('button');
