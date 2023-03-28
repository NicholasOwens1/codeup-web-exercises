
// mapboxgl.accessToken = 'pk.eyJ1Ijoibmlja3N0ZXBoIiwiYSI6ImNsZmp2dmNsOTA0d2Q0M3I1bmluMTA3cDAifQ.TtgLiqTSPIwdpEj6OxRxmA';
// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
//     center: [-98.4916, 29.4252], // starting position [lng, lat]
//     zoom: 20, // starting zoom
// });
// map.setZoom(3);

// const codeupMarker = new mapboxgl.Marker()



               mapboxgl.accessToken = 'pk.eyJ1Ijoibmlja3N0ZXBoIiwiYSI6ImNsZmp2dmNsOTA0d2Q0M3I1bmluMTA3cDAifQ.TtgLiqTSPIwdpEj6OxRxmA';
               const map = new mapboxgl.Map({
                 container: 'map', // container ID
                 style: 'mapbox://styles/mapbox/satellite-streets-v12',
                 center: [-98.4916, 29.4252],
                 zoom: 20,
               });
                 map.setZoom(3);


let currentCityArr = ['san antonio', -98.495141 , 29.4246];
window.addEventListener('load', async function(){
    let address = currentCityArr[0];
    geocode(address, MAPBOX_API_TOKEN).then(async coords => {
        const newMarker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);
        map.setCenter(coords);
        //reset currentCityArr array and push new coordinates for current weather fetches
        currentCityArr = [];
        currentCityArr.push(document.querySelector('#setMarker').value);
        currentCityArr.push(coords[0]);
        currentCityArr.push(coords[1]);
        console.log('-----loaded default city of San Antonio------')
        console.log(currentCityArr);

        await setCurrentWeather();
        await setFiveDayCurrent();
    });

});







