
// grab median price of home from popular real estate site that begins with the letter 'Z'

var priceElements = document.getElementsByClassName('list-card-price');
var prices = [];

for(var i=0; i < priceElements.length; i++) {
    var priceEl = priceElements[i];
    var price = priceEl.innerText.replace('$', '').replaceAll(',', '');
    console.log('|' + price + '|');
    prices.push(parseInt(price));
}

prices.sort(function(a,b) {
    if ((a-b) > 0) {
        return 1; }
    else {
        return -1}
});

console.log("sorted prices: ", prices); var isOdd = ((prices.length % 2) == 1) ? true : false;
console.log("is odd:", isOdd);
var medIdx = 0;
var medPrice = 0;
medIdx = Math.floor(prices.length / 2);

if (isOdd) {
    console.log("median:", medIdx);
    medPrice = prices[medIdx];
} else {
    console.log("processing even");
    medPrice = (prices[medIdx] + prices[medIdx + 1]) / 2;
}

console.log("median price:", medPrice);

alert("Median Price: $" + medPrice);

