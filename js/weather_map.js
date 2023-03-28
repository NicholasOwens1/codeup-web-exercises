import keys from './keys.js'
// coords for starting position
const SALong = -98.489615;
const SALat = 29.426827;

// console.log('Weathermap key => ', keys.openweather);


// function renderCoffees(coffees) {
//     let html = '';
//     for(let i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }



const getResult = async (SALat, SALong) => {
    // set code to wait on data respponse
    let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${SALat}&lon=${SALong}&appid=${keys.openweather}`)
    // Convert response to json
    let data = await response.json();
    // console.log(data);
    return data

}

const getWeather = async () => {

    let mapInfo = await getResult(SALat, SALong)
    console.log(mapInfo)


    // let temp = mapInfo.
}


(async()=>{
  let weather= await getWeather(SALat, SALong)
    console.log(weather)
    let data = await getResult(SALat,SALong)
    console.log(data)
    await fiveDayForecast()
})();


let date = document.querySelector('.date')
let dateCard = "";
let temp = document.querySelector('.temp')
let clouds = document.querySelector('.clouds')
let wind = document.querySelector('.wind')
let pressure =document.querySelector('.pressure')

const fiveDayForecast = async () => {
    let forecast = await getResult(SALat,SALong);
    let date = document.querySelectorAll(".date")
    console.log(date)
let daysOfTheWeek = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    forecast.list.forEach((f, index) => {
        let time = new Date(f.dt * 1000)
        let day = time.getDay()
        if(index % 8 === 0 && index !== 0) {
            for(let i = 0; i< date.length; i++){
                    date[i].innerHTML = `<p>${daysOfTheWeek[day]}</p>`
                day++
            }


            console.log(forecast)

        }
        date.innerHTML = dateCard;
    })

}




// document.querySelector('.date').innerHTML




