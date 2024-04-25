/**
 * Creates an object with the specified format.
 * @param {string} departmentName - The name of the department.
 * @param {string[]} employees - An array of employee names.
 * @returns {Object} - An object with the specified format.
 */
export default function createEmployeesObject(departmentName, employees) {
    const result = {
        [departmentName]: employees,
    };
    return result;
}

// Example usage
const department = "Software";
const employeeList = ["Bob", "Sylvie"];
const employeesObject = createEmployeesObject(department, employeeList);
console.log(employeesObject);

