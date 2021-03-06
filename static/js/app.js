// from data.js
var tableData = data;

// YOUR CODE HERE!
// Create a variable
// var inputDate = [];

// Create a variable for tbody
var tbody = d3.select("tbody");
// var row = tbody.append("tr");

// Create a variable for form
var form = d3.select("#form");

// Create a variable for button
var button = d3.select("#filter-btn");

// Display all the data into the table
tableData.forEach(function(date) {
    var row = tbody.append("tr");

    row.append("td").text(date.datetime);
    row.append("td").text(date.city);
    row.append("td").text(date.state);
    row.append("td").text(date.country);
    row.append("td").text(date.shape);
    row.append("td").text(date.durationMinutes);
    row.append("td").text(date.comments);
})

// Create event handler
form.on("submit", hitEnter);
button.on("click", hitEnter);

function hitEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Create input variable for 'datetime' id
    var inputElement = d3.select("#datetime");

    // Create a variable to store the input value
    var inputValue = inputElement.property("value");

    // Print the input value in the console
    console.log(inputValue);

    // Filter the data based on the input value
    // var filteredData = tableData.filter(data => data.datetime === inputValue);

    // Create a function to take the input and return the value, if the input exists
    // Lowercase all inputs, except the datetime, because the columns 'City', 'State', 'Country' and 'Shape' are all lower cased
    function filterData(value) {
        if (value.datetime === inputValue) {
            return value;
        }
        else if (value.city === inputValue.toLowerCase()) {
            return value;
        }
        else if (value.state === inputValue.toLowerCase()) {
            return value;
        }
        else if (value.country === inputValue.toLowerCase()) {
            return value;
        }
        else if (value.shape === inputValue.toLowerCase()) {
            return value;
        }
        else {
            console.log("Input not found!");
        }
    };

    // Update the tableData everytime it's filtered with a new input
    tableData = tableData.filter(filterData);

    // Print the updated filtered data
    console.log(tableData);

    // Removes the table rows, if it exists
    if (tbody != null) {
        $("#table-area tbody tr").remove();
    }

    // Loop through the updated tableData and displays the filtered data from the input
    tableData.forEach(function(date) {
        var row = tbody.append("tr");

        row.append("td").text(date.datetime);
        row.append("td").text(date.city);
        row.append("td").text(date.state);
        row.append("td").text(date.country);
        row.append("td").text(date.shape);
        row.append("td").text(date.durationMinutes);
        row.append("td").text(date.comments);
    })
};