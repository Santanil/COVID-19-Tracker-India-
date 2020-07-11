const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

//yestardy's date as default
let d = new Date();
let yestarday;
if(d.getDate()-1 < 10 && d.getMonth()+1 < 10)
  yestarday = String(`0${d.getDate()-1}/0${d.getMonth()+1}/2020`);
else if(d.getDate()-1 < 10 && d.getMonth()+1 >= 10)
  yestarday = String(`0${d.getDate()-1}/${d.getMonth()+1}/2020`);
else if(d.getDate()-1 >= 10 && d.getMonth()+1 < 10)
  yestarday = String(`${d.getDate()-1}/0${d.getMonth()+1}/2020`);
else
  yestarday = String(`${d.getDate()-1}/${d.getMonth()+1}/2020`);
console.log(yestarday);



// datePicker script
document.addEventListener('DOMContentLoaded', function() {
  //var options = {'yearRange':5};
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
  let dateData = String(`${str.substr(8,2)}/${str.substr(5,2)}/2020`);
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
          let dateformat1 = String(`${dateData.substr(0,2)} ${monthNames[parseInt(dateData.substr(3,5))-1]} `);
          data.cases_time_series.forEach(element => {
              if(element.date == dateformat1 ){
                  console.log(element.dailyconfirmed);
                  document.querySelector('.one').innerHTML = `<p><h1 style="text-align: center; font-family:'Comic Sans MS'; color: white; font-size:80px"> ${element.dailyconfirmed} </h1><p>`;
                  document.querySelector('.two').innerHTML = `<p><h1 style="text-align: center; font-family:'Comic Sans MS'; color: white; font-size:80px">${element.dailyrecovered} </h1><p>`;
                  //document.querySelector('.three').innerHTML = `<p><h1 style="text-align: center; font-family:'Comic Sans MS'; color: white; font-size:100px">${element.testspermillion} </h1><p>`;
                  document.querySelector('.four').innerHTML = `<p><h1 style="text-align: center; font-family:'Comic Sans MS'; color: white; font-size:80px"> ${element.dailydeceased} </h1><p>`;
              }
          });
          data.tested.forEach(element => { console.log(dateData);
            if(element.testedasof == dateData){ 
                console.log(element.testspermillion);
                document.querySelector('.three').innerHTML = `<p><h1 style="text-align: center; font-family:'Comic Sans MS'; color: white; font-size:80px">${element.testspermillion} </h1><p>`;
            }
          });
    });
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










