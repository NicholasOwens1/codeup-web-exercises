import {getPlanets, getFilm, getPerson} from "./promises2.js";

// console.log(getPlanets(1))
(async()=>{
    let planet = await getPlanets(1);
    let person = await getPerson(1);
    let film = await getFilm(2)
    console.log(planet.created);
    console.log(person.height);
    console.log(film.e)
})();