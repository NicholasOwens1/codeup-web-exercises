const getData = async (data) => {
    try {
        // wait to receive info back
        let response = await fetch(`data/inventory.json`);
        // gives variable to returned data
        let data = await response.json();
        // return the response that was waited on
        return data;
    }   catch(error) {
        console.log(error);
    }
}
console.log(getData(1))
