//Return a sorted array without changing the original array

let globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  let emptyArr = [];
  return globalArray.concat(emptyArr).sort((a,b) => a-b);

  // Add your code above this line
}
nonMutatingSort(globalArray);
