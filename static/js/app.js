// Import data from data.js
const tableData=data;
// Reference HTML table using D3
var tbody=d3.select("tbody");
function buildTable(data){
    // Clear the existing data
    tbody.html("");
    // Loop through each object and convert it to row element
    data.forEach((dataRow)=>{
        // Add the tr tag under tbody and assign it to row variable
        let row=tbody.append("tr");
        // Loop through each item in the object and convert it to value
        Object.values(dataRow).forEach((val)=>{
            // Add the td tag under tr tag and add extrated item value inside  
            let cell=row.append("td");
            cell.text(val)
        });
    });
}
function handleClick(){
    // Grabs the entered datetime value from HTML
    let date=d3.select("#datetime").property("value");
    // Default value to display if no date is entered
    let filterdData=tableData;
    // Filter rows based on entered data
    if (date){
        filteredData=filteredData.filter(row=>row.datetime===date);
    }
    // Call build table function to build the table
    buildTable(filteredData);
}
d3.selectAll("#filter-btn").on("click",handleClick);
buildTable(tableData);