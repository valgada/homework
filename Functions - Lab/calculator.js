function simpleCalculator(a, b, operator) {

    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    let operations = [
        multiply,
        divide,
        add,
        subtract,
    ]

    let result;
    let operation;

    switch (operator) {
        case "multiply":
            operation = operations[0];
            break;
        case "divide":
            operation = operations[1];
            break;
        case "add":
            operation = operations[2];
            break;
        case "subtract":
            operation = operations[3];
            break;
    }

    console.log(operation(a,b));
}
simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8, 'divide')
simpleCalculator(12, 19, 'add')
simpleCalculator(50, 13, 'subtract')