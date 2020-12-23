// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the tableData from data.js
console.log(tableData);

// Loop Through `tableData` and console.log each table object
tableData.forEach(function(table) {
  console.log(table);
  
  // Use d3 to append one table row `tr` for each table object
  var row = tbody.append("tr");

  // Use `Object.entries` to console.log each table value
  Object.entries(table).forEach(function([key, value]) {
    console.log(key, value);
    
    // Use d3 to append 1 cell per table value (datetime, city, state, country, shape, durationMinutes, comments)
    var cell = row.append("td");

    // Use d3 to update each cell's text with table values (datetime, city, state, country, shape, durationMinutes, comments)
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select(".form-group");

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  //Clear data
  tbody.html("");
  
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  //Print the inputValue
  console.log(inputValue);

  var filteredData = tableData.filter(row => row.datetime === inputValue);

  //Print the value to the console
  console.log(filteredData);

  // Loop Through `filteredData` 
  filteredData.forEach(function(date) {
    console.log(date);
    
    // Use d3 to append one table row `tr` for each table object
    var row = tbody.append("tr");
  
    // Use `Object.entries` to console.log each table value
    Object.entries(date).forEach(function([key, value]) {
      console.log(key, value);

      // Use d3 to append 1 cell per table value (datetime, city, state, country, shape, durationMinutes, comments)
      var cell = row.append("td");
      
      // Use d3 to update each cell's text with table values (datetime, city, state, country, shape, durationMinutes, comments)
      cell.text(value);
    });
  });
};




