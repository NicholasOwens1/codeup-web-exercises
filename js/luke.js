const getPerson = async (person) => {
    try {
        // wait to receive info back
        let response = await fetch(`https://swapi.dev/api/people/${person}`);
        // gives variable to returned data
        let data = await response.json();
        // return the response that was waited on
        return data;
    }   catch(error) {
        console.log(error);
    }
}

(async() =>{

    let newHope = await getPerson(1);

})();

console.log(getPerson(25))