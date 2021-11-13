class Advancedcal {
    static count = 0;
    constructor() {
        Advancedcal.count++;
    }
    static iscount() {
        return Advancedcal.count;
    }
}
Advancedcal.count = 10;
let x = new Advancedcal();
let y = new Advancedcal();
let advancedcal1 = new Advancedcal();
console.log(Advancedcal.iscount());