const date = new Date();
Date.prototype.IndDateString = function() {
    var month = date.getMonth();

    var day = date.getDate().toString();

    var year = date.getFullYear().toString().substr(-2);
    return day + "/" + month + "/" + year;
}
console.log(date.IndDateString());