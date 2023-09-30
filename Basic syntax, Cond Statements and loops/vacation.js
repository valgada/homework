function vacation(group, type, day) {
    let pricePerPerson = 0;

    if (day === "Friday") {
        switch (type) {
            case "Students":
                price = 8.45; break;
            case "Business":
                price = 10.90; break;
            case "Regular":
                price = 15; break;
        }
    } else if (day === "Saturday") {
        switch (type) {
            case "Students":
                price = 9.80; break;
            case "Business":
                price = 15.60; break;
            case "Regular":
                price = 20; break;
        }
    } else if (day === "Sunday") {
        switch (type) {
            case "Students":
                price = 10.46; break;
            case "Business":
                price = 16; break;
            case "Regular":
                price = 22.50; break;
        }

    }

    let totalGroupPrice = group * price;

    if (group >= 30 && type === "Students") {
        totalGroupPrice *= 0.85;
    } else if (group >= 100 && type === "Business") {
        let discountedPrice = 10 * pricePerPerson
        totalGroupPrice -= discountedPrice;
    } else if (group >= 10 && group <= 20) {
        totalGroupPrice *= 0.95;
    }

        console.log(`Total price: ${totalGroupPrice.toFixed(2)}`);

}
vacation(30, "Students", "Sunday");
vacation(40,
    "Regular",
    "Saturday");