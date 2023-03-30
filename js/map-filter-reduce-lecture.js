const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// const hasThree = users.languages.filter(function(n){
//     return n.length === 0;
// })
// console.log(hasThree)

// const emails = users.map(user => user.email)

const langs = users.filter(user => user.languages.length >= 3)

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

const usedCars = [
    {
        year: 2006,
        make: "Toyota",
        model: "Prius",
        price: 8044
    },
    {
        year: 2017,
        make: "Honda",
        model: "Civic",
        price: 18123
    },
    {
        year: 2004,
        make: "Ford",
        model: "Mustang",
        price: 9052
    },
    {
        year: 2013,
        make: "Cadillac",
        model: "ATS",
        price: 10991
    },
    {
        year: 2009,
        make: "Subaru",
        model: "Impreza",
        price: 7335
    },
    {
        year: 2008,
        make: "Dodge",
        model: "Charger",
        price: 8847
    },
    {
        year: 2014,
        make: "Chrysler",
        model: "300",
        price: 13517
    },
    {
        year: 2011,
        make: "Buick",
        model: "Regal",
        price: 8253
    },
    {
        year: 2012,
        make: "Chevrolet",
        model: "Impala",
        price: 6736
    },
    {
        year: 2015,
        make: "BMW",
        model: "3 series",
        price: 13767
    },
    {
        year: 2020,
        make: "Hyundai",
        model: "Elantra",
        price: 17892
    },
    {
        year: 2008,
        make: "Mercedes-Benz",
        model: "C-Class",
        price: 8444
    },
    {
        year: 2016,
        make: "Audi",
        model: "A3",
        price: 15900
    }
];

let usedCarPrices = usedCars.map(car => car.price);

const tousedCarPrices = usedCarPrices.reduce((total, price, index) => {
    console.log(`The index is ${index},
 the total is ${total}, current car value is ${price}`);
    return total + price;
}, 0);

const aHundredNums = [9225, 6397, 97, 5062, 2149, 4656, 6551, 2145, 1073, 7963, 6279, 2873, 1820, 1468,
    9611, 6431, 797, 3433, 5518, 4932, 7880, 6996, 5761, 6828, 6909, 9431, 4313, 2265, 7709, 5131, 2054,
    8212, 9285, 7945, 612, 6055, 7189, 8539, 8201, 2209, 98, 9329, 4281, 441, 7230, 3582, 2502, 8432, 9749,
    1267, 4111, 4289, 6793, 8238, 6892, 7665, 9252, 2065, 9817, 8868, 2133, 4519, 1916, 3035, 7547, 9217,
    9438, 4473, 7162, 6652, 2540, 5290, 1502, 7302, 3917, 6100, 6211, 286, 8413, 8380, 5514, 5858, 7280,
    3490, 3907, 1, 1428, 8825, 8339, 8809, 7713, 7770, 3873, 3474, 6775, 9126, 3081, 7613, 4017, 445];

// accumulator, element, index, array
const sum = aHundredNums.reduce((accumulator, currentValue, index) => {
    return accumulator + currentValue
}, 0)
// add up all elements one after another, then divide by the length of the array. Accumulator starts at the first index
const average = aHundredNums.reduce((accumulator, currentValue) => (accumulator + currentValue)) / aHundredNums.length



const miles = cars.reduce((acc, car) => {
    return acc + car.mileage},
    0
);


const prower = cars.reduce((acc, car) => {
    console.log(acc)
    acc.push(car.mileage);
    return acc;
}, []);



let years = users.reduce((acc, user) => (
    acc + user.yearsOfExperience), 0) / users.length



let longMail = users.reduce((acc, user) => {
    if(acc.length < user.email.length){
        return user.email.length;
    } else {
        return acc
    }
}, '');

let instructors = users.reduce((acc, user, index) => {
    if(index + 1 === users.length) {
        return acc + `${user.name}.`;
    } else {
        return acc
    }
}, '')

let uniqueLanguages = users.reduce((acc, user) => {

},)

// let names = users.reduce((acc, name) => {
//      (`Your instructors are ${}`)
// }, '')