function demo(num1, num2, num3) {

    let sum = num1 + num2 + num3;
    let isFloat = false;
    let sumToStr = String(sum);

    for (let i = 0; i < sumToStr; i++) {

        if (sumToStr[i] == ".") {
            isFloat = true;
        }
    }
     console.log(`${sum} - ${isFloat ? "Float" : "Integer"}`);  
}
demo(9, 100, 1.1);
demo(100, 200, 303);