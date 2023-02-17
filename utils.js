Money format USD
toLocaleString("en-US", {style:"currency", currency:"USD"})

random number function
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}