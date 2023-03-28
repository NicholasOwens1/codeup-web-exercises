// const prices = [32.99, 21.99, 6.99, 4.99 , 12.99, 8.98, 5.99]

// prices.forEach(price => {
//     console.log (price + 1)
// })

// const pricesAfterTax = prices.map(price => {
//     const tax = (price * 0.0825).toFixed(2);
//     const total = (price + parseFloat(tax)).toFixed(2);
//     return total;
// })

// let randomNumbers = [70, 30, 73, 22, 40, 48, 76, 20, 13, 92, 20, 56, 97, 76, 26, 77, 57, 47, 83, 70 ];
//
// const squared = randomNumbers.map(number => number ** 2);

const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

const mileages = cars.map(car => car.mileage)

const carNames = cars.map(car => `${car.make} ${car.model}`);

const books = [
    {title: 'Win Chess',
        author: {
            firstName: "James",
            lastName: "Stewart"}
    },
    {title: 'Run Slow',
        author: {
            firstName: "Mike",
            lastName: "Hoffman"
        }},
    {title: 'Cat Language',
        author: {
            firstName: "Navia",
            lastName: "Alexander"
        }},
    {title: 'Saxophonology',
        author: {
            firstName: "Javers",
            lastName: "Owens"
        }},
    {title: 'Bake Everything',
        author: {
            firstName: "Syndey",
            lastName: "Johnson"
        }},]

const authors = books.map(book => `${book.author.firstName} ${book.author.lastName}`);

const under10k = cars.filter(car => cars.mileage < 10000 )