function ischeckPalindrome(str) {
    var x;
    var first, second;
    if (typeof str === 'string') {
        if (str.length % 2 == 0) {
            x = (str.length) / 2;
            first = str.slice(x);

            second = str.slice(0, x);
        } else {
            x = (str.length / 2) + 1;
            first = str.slice(-x);
            console.log(first); //dam
            second = str.slice(0, x); //mad
            console.log(second); //Mad
        }
        let first1 = first.split('').reverse().join('');
        let second1 = second.toLowerCase();
        if (first1 === second) {
            return 'palindrome';
        } else if (first1 = second1) {
            return 'not exact same case'
        } else {
            return 'not palindrome'
        }

    }
}
const result = ischeckPalindrome('Madam');
console.log(result);