// Use some() to check that any elements in an array meet a criteria

function checkPositive(arr) {
    // Add your code below this line
    return arr.some(function(elm){
      if (elm > 0){
        return true;
      } else {
        return false;
      }
    })
  
    // Add your code above this line
  }
  checkPositive([1, 2, 3, -4, 5]);
  