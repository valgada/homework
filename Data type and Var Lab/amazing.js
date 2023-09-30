function demo(number) {
    let numAsStr = String(number);
    let result = 0;
    
    for (let i = 0; i < numAsStr.length; i++) {
            result += Number(numAsStr[i]);
        }

    let resultAsString = String(result);
    let contains9 = false;

    for (let i = 0; i < resultAsString.length; i++) {
        if (resultAsString[i] == "9") {
            contains9 = true; break;
        }
    }


    console.log(`${number} Amazing? ${contains9 ? "True" : "False"}`);
}
demo(1233);
demo(999);
