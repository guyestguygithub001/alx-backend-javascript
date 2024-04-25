export default function iterateThroughObject(reportWithIterator) {
    // Initialize an empty string to store employee names
    let employeeNames = "";

    // Iterate through each employee in the report
    for (const employee of reportWithIterator) {
        // Append the employee name to the string
        employeeNames += employee + " | ";
    }

    // Remove the trailing pipe (|) separator
    employeeNames = employeeNames.slice(0, -3);

    return employeeNames;
}

// Example usage
const reportWithIterator = ["John Doe", "Guillaume Salva", "Kanye East", "Jay Li"];
const result = iterateThroughObject(reportWithIterator);
console.log(result);

