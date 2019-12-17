// Implement the Filter Method on a Prototype

// the global Array
let s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  let newArray = [];
  // Add your code below this line
   for (let i=0; i<this.length; i++){
     if (callback(this[i]) === true)
     newArray.push(this[i]);
   }
  // Add your code above this line
  return newArray;

};

let new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
