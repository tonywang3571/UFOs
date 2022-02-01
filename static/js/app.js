// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

//Create function to iterate through the list of data(object) and append into a table format.
function buildTable(data) {
    // First, clear out any existing data to prevent duplicates.
    tbody.html("");

    // Next, loop through each object in the data
    // Append a row and cells for each value
    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        // Loop through each field in the dataRow
        // and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });   
}