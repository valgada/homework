function orders(product, qty) {

    let price = 0;

        switch (product) {
            case "coffee": price = 1.50 * qty; break;
            case "water" : price = 1.00 * qty; break;
            case "coke"  : price = 1.40 * qty; break;
            case "snacks": price = 2.00*  qty; break;
        }
    

    console.log(price.toFixed(2));


}
orders("water", 5 );
orders("coffee", 2 );