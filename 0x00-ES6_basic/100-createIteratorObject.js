export default function createIteratorObject(report) {
    // Initialize an empty array to store employees
    const employees = [];

    // Iterate through each department in the report
    for (const department in report) {
        // Add each employee to the array
        employees.push(...report[department]);
    }

    // Create an iterator from the array of employees
    return employeesSymbol.iterator;
}

// Example usage
const employees = {
    'engineering': ['Bob', 'Jane'],
    'marketing': ['Sylvie']
};

const report = { 'employees': employees };
const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
    console.log(item);
}

