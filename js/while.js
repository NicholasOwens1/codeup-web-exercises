let i = 2;
while (i <= 32768) {
    console.log(i *= 2)
}

let conesInventory = randomNumber(50, 100);

do {
    let conesWanted = randomNumber(1, 5);
    if (conesWanted > conesInventory) {
        console.log(`Cannot sell you ${conesWanted}, I only have ${conesInventory}`);
        console.log(`${conesInventory} sold...`);
        conesInventory = 0;
    } else {
        console.log(`${conesWanted} sold...`);
        conesInventory = conesInventory - conesWanted;
    }
    console.log(`${conesInventory} left`);

} while(conesInventory > 0);
console.log("Yay! I've sold them all!");