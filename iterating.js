    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = ["james", "mike", "donatello", "raphael"]
    // array with names

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length)
    // number of elements in array
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    names.split
    // split the names array into multiple parts
    console.log(names)
    //give each name seperately
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (let i = 0; i < names.length; i++) {
        console.log(names[i])
    }
    //
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
names.forEach((name) => {
    console.log(`cool name, ${name}`)
})
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    let first = [1, 2, 3, 4, 5]
    let second = [1,2,3,4,5]
    let last = [1,2,3,4,5]
    const funOne = (position) => {
        console.log(first[0])
    }

    const funTwo = (position) => {
        console.log(second[1])
    }

    const funThree =(position) => {
        console.log(last[4])
    }

    funOne(first)
    funTwo(second)
    funThree(last);



