// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 (tell JavaScript to look for
// the <tbody> tags in the HTML)
var tbody = d3.select("tbody");

// function to build the table to display all of the UFO sightings.
// iterate through the array of objects in our data file and then append 
// them to a table row. 

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Create a variable to append a row to the table body
      let row = tbody.append("tr"); // tells JavaScript to find the <tbody> tag within the HTML and add a table row ("tr").
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      // telling JavaScript to reference one object from the array of UFO sightings.
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td"); // appending data into a table data tag (<td>)
        cell.text(val);  // now add the values
        }
      );
    });
  }