export const getPlanets = async (planet) => {
    try {
        // grab plantes data
        let response = await fetch(`https://swapi.dev/api/planets/${planet}`);
        // return formatted data
        let data = response.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

export const getPerson = async (character) => {
    try {
        // grab plantes data
        let response = await fetch(`https://swapi.dev/api/people/${character}`);
        // return formatted data
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const getFilm = async (film) => {
    try {
        // grab plantes data
        let response = await fetch(`https://swapi.dev/api/films/${film}`);
        // return formatted data
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}
