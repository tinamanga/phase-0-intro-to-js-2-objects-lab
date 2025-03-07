// // Write your solution in this file!
let employee;

beforeEach(function() {
    employee = {
      name: 'Sam',
      position: 'developer'
    };
  });
  
// 1. Non-destructive: Returns a clone of the employee object with the new key/value pair added
function updateEmployeeWithKeyAndValue(employee, key, value ) {
    return { ...employee, [key]: value };
  }
  
  // 2. Destructive: Updates the employee object with the new key/value pair and returns the updated object
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee={name:'Sam'};
    return employee;
  }
  
  // 3. Non-destructive: Returns a new employee object with the key deleted (the original is unchanged)
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // 4. Destructive: Deletes the key from the employee object and modifies the original object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }

   