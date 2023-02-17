

    let userPrompt;
    while(true){
        userPrompt = parseInt(prompt('Please enter an odd number between 1 and 50.'))
        if(userPrompt % 2 === 1 && userPrompt > 1 && userPrompt < 50){
       break;
    }
    }

    for(let i = 1; i<= 49; i += 2) {
        if (i === userPrompt) {
            console.log(`Yikes! skipping number ${i}`)
            continue;
        }
        console.log(`Here is an odd number: ${i}`);
    // }
//
//
//
//
//

//
    //
    //
    let num = parseInt(prompt("enter an odd number between 1 and 50"));
while(num % 2 === 0 || num <= 1 || num >= 50) {
     let numTwo = parseInt(prompt("enter an odd number between 1 and 50"));
    if (numTwo % 2 !== 0 && numTwo > 1 && numTwo < 50) {
        for (let i = 1; i < 50; i++) {
            if(i % 2 !== 0 || i !== numTwo) {
                console.log(i)
            }
        }
        }
    }}
    //





