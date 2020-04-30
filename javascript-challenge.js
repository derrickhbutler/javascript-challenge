
 var date_element = document.getElementById("date");

document.getElementById("Submit").addEventListener("click", displayDate);

function displayDate(e) {
     e.preventDefault();
  console.log(date_element.value);
  console.log(typeof date_element.value);
     date_array = date_element.value.split("-");
     var year = date_array[0];
     var month = parseInt(date_array[1],10);
     var day = parseInt(date_array[2],10);
     console.log(month + "/" + day + "/" + year);



     var user_date = new Date(year,month,day);
filterDate(user_date);
}
function filterDate(user_date){
     let  tableData = data;
//console.log(data); 
// reference to the html table, where we are going to inject the data - this is the box
var Table_Box = document.getElementById("Table");
//create the actual table within the box
var actual_table = document.createElement("table",  {class : 'table-striped', class : 'table-bordered'});
//  CREATE Table rows and columns
var row = document.createElement('tr');

//use to extracts keys and set as table headers
row.innerHTML = "<th>datetime</th><th>city</th><th>state</th><th>country</th><th>shape</th><th>durationMinutes</th><th>comments</th>";
actual_table.appendChild(row);



//var Table_Box;
for (var i=0; i < tableData.length; i++) {
     var info = tableData[i]; 
     if (typeof info == "undefined") continue;
     console.log(info.datetime);
    //get date from info
    var date = info.datetime;
    //console.log(date)
   var date_array = date.split("/");
    var month = parseInt(date_array[0]);
    var day = parseInt(date_array[1]);
    var year = parseInt(date_array[2]);
    console.log(year + " " + month + " " + day);
    var compareDate = new Date(year,month,day);
    //compare date to user date
    if (compareDate > user_date){continue;}
    else if (user_date > compareDate){continue;}
    //if NOT > OR < 
    //add table to row
console.log(compareDate);
console.log(user_date);

    
     var table_row = document.createElement('tr');
     table_row.innerHTML = "<td>"+ info.datetime +"</td>"+"<td>"+info.city+"</td>"+"<td>"+info.state+"</td>"+"<td>"+info.country+ "</td>"+ info.shape +"</td>"+"<td>"+info.durationMinutes+"</td>"+"<td>"+info.comments+"</td>";


actual_table.appendChild(table_row);
}

Table_Box.innerHTML = "";
Table_Box.appendChild(actual_table);

}
function buildTable(){
     let  tableData = data;
     var tableDiv =  d3.select('#Table') 
     var tableVariable = tableDiv.append("table")
                              .classed('table-striped', true)
                              .classed('table-bordered', true)
     var tableHeader = tableVariable.append("thead")
     var table_head = tableHeader.append('tr')
     Object.keys(tableData[0]).forEach( (key) => {
          table_head.append('th').text(key)
     })

     var tBody = tableVariable.append('tbody')

     data.forEach( (dict) => {
          tRow = tBody.append('tr')
          Object.entries(dict).forEach( value => {
               tRow.append('td').text(value)
          })
     })
}
buildTable()