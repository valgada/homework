function demo(num) {

    let units = num % 10;
     num -= units;
     num /= 10;
     

     let tens = num % 10
     num -= tens;
     num /= 10;
     

     let hundreds = num % 10; 
     num -= hundreds;
     num /= 10;
     
     
     console.log(hundreds + tens + units);

}
demo(543);