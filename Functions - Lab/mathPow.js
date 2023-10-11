//function mathPow(num,pow) {

    //console.log(Math.pow(num,pow));
//}
//mathPow(2,8);
//mathPow(3,4);


function mathPow1(num,pow) {
    let product = 1;
    
    for(let i = 0; i < pow; i++) {
        product *= num;

    }

   console.log(product);
}
mathPow1(2,8);
mathPow1(3,4);
