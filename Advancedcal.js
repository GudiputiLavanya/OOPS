const Calc = require('./Basiccal');
class Advancedcal extends Calc {
    constructor(base, power) {
        this.base = base;
        this.power = power;
    }
    set setpower(data1) {
        this.power = data1;
    }
    set setbase(data2) {
        this.base = data2;
    }
    powercal1() {
        let temp = 1;
        while (this.power > 0) {
            temp = this.Mul(temp, this.base);
            this.power--;
        }
        return temp;
    }
}
let advancedcal1 = new Advancedcal(2, 3);
console.log(advancedcal1.powercal1());