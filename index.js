
// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, searchString) {
    const searchLower = searchString.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase() === searchLower);
  }
  
  
  function fuzzyMatch(drivers, searchString) {
    const searchLower = searchString.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(searchLower));
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
 
  
  
  