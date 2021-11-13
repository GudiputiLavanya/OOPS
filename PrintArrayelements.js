function arrayNumberinput(array1) {
    if (Array.isArray(array1)) {
        const arr1 = array1.filter(check_input);

        function check_input(value) {
            return ((isNaN(value) == false) && (value > 50 && value < 100));
        }
        if (arr1.length == 0) {
            console.log("enter valid Array with number between 50 to 100 ")
        } else {
            console.log(arr1);
        }
    } else {
        console.log('enter valid Array');
    }

}
arrayNumberinput([1, 2, 3, 45]);