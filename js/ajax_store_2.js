fetch('../data/inventory.json').then((raw) => {
    return raw.json(); //return objectified json data
}).then((formattedData) => { //this is an array of objects
    console.log(formattedData)
    let tableData="";
    formattedData.map((values)=> {
        tableData +=`<tr>
            <th>${values.title}</th>
            <th>${values.quantity}</th>
            <th>${values.categories}</th>
            <th>${values.price}</th>
        </tr>`
    });
    document.getElementById(`insertProducts`).innerHTML = tableData
}).catch((err)=>{
    console.log(err);
})