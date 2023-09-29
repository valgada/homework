function theatre(day, age) {

    if (age < 0 || age > 122) {

        console.log("Error!");

    } else if (age <= 18) {

        switch (day) {
            case "Weekday":
               console.log("12$"); break;
            case "Weekend":
                console.log("15$"); break;
            case "Holiday":
                console.log("5$"); break;
        }
    } else if (age <= 64) {

        switch (day) {
            case "Weekday":
                console.log("18$"); break;
            case "Weekend":
                console.log("20$"); break;
            case "Holiday":
                console.log("12$"); break;
        }
    } else {

        switch (day) {
            case "Weekday":
                console.log("12$"); break;
            case "Weekend":
                console.log("15$"); break;
            case "Holiday":
                console.log("10$"); break;
        }

    }



}
theatre('Weekday', 42);
theatre('Holiday', -12);
theatre('Holiday', 15);