// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // My code goes here!
    let obj = {};
    let sum = currency;
    let counter = 0;
    if (currency <= 0) return obj;
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    while (sum > 0) {                       // halfs
        if ((sum - 50) < 0) break;
        sum -= 50;
        counter++;
    }
    if (counter > 0) obj['H'] = counter;
    counter = 0;

    while (sum > 0) {                       // quarters
        if ((sum - 25) < 0) break;
        sum -= 25;
        counter++;
    }
    if (counter > 0) obj['Q'] = counter;
    counter = 0;

    while (sum > 0) {                       // dimes
        if ((sum - 10) < 0) break;
        sum -= 10;
        counter++;
    }
    if (counter > 0) obj['D'] = counter;
    counter = 0;

    while (sum > 0) {                       // nickels
        if ((sum - 5) < 0) break;
        sum -= 5;
        counter++;
    }
    if (counter > 0) obj['N'] = counter;
    counter = 0;

    while (sum > 0) {                       // pennies
        if ((sum - 1) < 0) break;
        sum -= 1;
        counter++;
    }
    if (counter > 0) obj['P'] = counter;
    // Return an object containing the minimum number of coins needed to make change
    return obj;
}
