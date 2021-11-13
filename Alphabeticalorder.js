/*const arr1 = ['Lavanya', 'lavanya', 'lAanya'];
const fun = arr1.sort(function(a, b) {
    var input = a.charCodeAt(0) <= 90 && b.charCodeAt(0) <= 90;
    if (input) {
        return a.charCodeAt(0) - b.charCodeAt(0);
    } else if (a.charCodeAt(0) <= 90) {
        return 1; //1>0 change
    } else if (b.charCodeAt(0) <= 90) {
        return -1; //-1<0 //no change
    }
});
//const arr = ['Priya', 'priya', 'pRiya'];
//console.log(arr1.sort());
console.log(fun);*/

function array_reverse(array1) {
    if (Array.isArray(array1)) {
        let result = array1.sort().reverse();
        return result;
    } else {
        console.log("Enter valid array")
    }
}
console.log(array_reverse(['Lavanya', 'lavanya', 'lAvanya']));