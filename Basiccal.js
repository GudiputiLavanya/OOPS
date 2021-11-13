 class Calc {
     constructor(value1, value2) {
         this.value1 = value1;
         this.value2 = value2;
     }

     Add() {
         console.log(this.value1 + this.value2);
     }
     Sub() {
         console.log(this.value1 - this.value2);
     }
     Mul(a = this.value1, b = this.value2) {
         return a * b;
     }
     Div() {
         console.log(this.value1 / this.value2);
     }

 }
 let cal1 = new Calc(2, 3);
 cal1.Add();
 call.Sub();
 cal1.Mul();
 cal1.Div();
 module.exports = Calc;