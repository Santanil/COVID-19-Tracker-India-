const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

//yestardy's date as default
let d = new Date();
let yestarday = String(`0${d.getDate() -1} ${monthNames[d.getMonth()]} `);
//let date1 = "06 June ";
console.log(yestarday);



// datePicker script
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  //var instances = M.Datepicker.init(elems, options);
});

//get yestarday's data
function yestardayData(){
  console.log(getData(yestarday));
}

//extractDate from date picker to pass to function to get associated data
function extractDate(){
  let str = document.getElementById("getdate").value;
  // console.log(monthNames[parseInt(str.substr(5,2))-1]);
  // console.log(str.substr(8,2));
  let dateData = String(`${str.substr(8,2)} ${monthNames[parseInt(str.substr(5,2))-1]} `);
  console.log(dateData);
  console.log(getData(dateData));
  }



//javascript code for getting data from API
// https://api.covid19india.org
let url = "https://api.covid19india.org/data.json"; 
function getData(dateData){
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data){
    console.log(data);
    data.cases_time_series.forEach(element => {
        if(element.date == dateData ){
            console.log(element.dailyconfirmed);
            document.querySelector('.one').innerHTML = `<p><h2> ${element.dailyconfirmed} </h2><p>`;
            document.querySelector('.two').innerHTML = `<p><h2> ${element.dailyrecovered} </h2><p>`;
            document.querySelector('.three').innerHTML = `<p><h2> ${element.testspermillion} </h2><p>`;
            document.querySelector('.four').innerHTML = `<p><h2> ${element.dailydeceased} </h2><p>`;
        }
    });
    // data.tested.forEach(element => {
    //   if(element.date == dateData ){
    //       console.log(element.dailyconfirmed);
    //       document.querySelector('.three').innerHTML = `<p><h2> ${element.testspermillion} </h2><p>`;
    //   }
  })  
}

function dataOutput(){
  console.log(getData(dateData));
}

//jquery code for getting data from API
// $(document).ready(function(){
//     init()
//     function init(){
//         let url = "https://api.covid19india.org/data.json";
//         $.get(url,function(data){
//              console.log(data);
//             data.cases_time_series.forEach(element => {
//                if(element.date == dateData )
//                     console.log(element.dailyconfirmed);
//             });
//         })
//     }
// })










