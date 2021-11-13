function Reverse_array(arr) {
    let result = arr.map(ischeckarray);

    function ischeckarray(value) {
        let result1 = value.split('').reverse().join('');
        return result1;
    }
    let output = result.reverse();
    return output;
}
console.log(Reverse_array(['lavanya', 'loukya', 'dhruvi']));