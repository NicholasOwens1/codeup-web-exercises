"use strict";
// console.log('here')
// async function loadIntoTable (url, table){
//     // target the table head
//     const tableHead = table.querySelector("#insertProducts")
//     // target the table head
//     const tableBody = table.querySelector("tbody")
//     // tell code to wait for the response
//     const response = await fetch(url)
//     // converts the info from the json file to usable info
//     const {title, price, quantity, categories} = await response.json();
//
//     // clear the table
//     // tableHead.innerHTML = "<tr></tr>";
//     tableBody.innerHTML = "";
//     // console.log(data)
//     // populate the headers
//     for (const headerText of title) {
//         const headerElement = document.createElement("th");
//
//         headerElement.textContent = headerText;
//         tableHead.querySelector("tr").appendChild(headerElement)
//
//         for (const row of quantity) {
//             const rowElement = document.createElement("tr");
//
//             for (const cellText of row) {
//                 const cellElement = document.createElement("td");
//
//                 cellElement.textContent = cellText;
//                 rowElement.appendChild(cellElement);
//             }
//             tableBody.appendChild(rowElement);
//         }
//     }
// }
//
//
//
// loadIntoTable("./data/inventory.json", document.querySelector("#insertProducts"))
//

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
console.log(getData())


// alert('working')
// const getData = () => {
// fetch("./data/inventory.json").then((data) => {
//     // grab raw data from json file
//     console.log(data);
//     // returns data converted to json format
//     return data.json();
// //
// }).then((objectData) => {
//     // logs the newly formed objects
//     console.log(objectData)
//     let tableData="";
//     // loops over each object in the array.
//
//
//     const buildTable = (inventory) => {
//         inventory.forEach(function(tool){
//             let row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${tool.title}</td>
//                 <td>${tool.quantity}</td>
//                 <td>${formatToLocaleString(tool.price)}</td>
//                 <td>${tool.categories.join(', ')}</td>
//             `;
//             document.querySelector('#insertProducts').appendChild(row);
//         });
//     }
//     buildTable(inventory);




    // objectData.map((values) => {
    //     tableData +=`<tr>
    //         <th>${values.title}</th>
    //         <th>${values.quantity}</th>
    //         <th>${values.price}</th>
    //         <th>${values.categories}</th>
    //     </tr>`;
        // puts the tableData text in the place of #insertProducts
        // document.querySelector(`#insertProducts`).innerHTML= tableData;

    // })
    // document.querySelector(`#insertProducts`)
// })}
// getData()

// start an IIFE async function, or Immediately Invoked Asynchronous Function Expression. The syntax is "(async function() {". Async functions can
// be anonymous, which means they dont need a name.
// (async function() {
//     "use strict";
//     // starts an async function inside of the first async function. This async function returns formatted data.
//     const getInventory = async () => {
//         // set code to wait on data to be fetched
//         let response = await fetch('../data/inventory.json');
//         // set code to wait for json response, bringing back code in object form
//         let data = await response.json();
//         // return the objectified data
//         return data;
//     }
//     // set code to wait for entire getInventory function to finish
//     let inventory = await getInventory();
//     // log the formatted data
//     // console.log(inventory);
//
//     // this function builds the table to hold the data
//     const buildTable = (inventory) => {
//         // loop through the formatted data
//         inventory.forEach(function(tool){
//             // create a row
//             let row = document.createElement('tr');
//             // place text as table data in the table row that was just created
//             row.innerHTML = `
//                 <td>${tool.title}</td>
//                 <td>${tool.quantity}</td>
//                 <td>${formatToLocaleString(tool.price)}</td>
//                 <td>${tool.categories.join(', ')}</td>
//             `;
//             // select the element with the insertProducts id.
//             document.querySelector('#insertProducts').appendChild(row);
//         });
//     }
//     buildTable(inventory);
//
//     document.querySelector('#refreshTable').addEventListener('click', async function(){
//         document.querySelector('#insertProducts').innerHTML = '';
//         let inventory = await getInventory();
//         buildTable(inventory);
//     });
//
//
// })();
//
