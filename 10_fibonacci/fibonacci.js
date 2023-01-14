const fibonacci = function (num) {
   if(num < 0) return "OOPS"
    //0 1 1 2
   let a = 0
   let b = 1
   let sum = 0

   for(let i = 0; i < num; i++){
        sum = a + b
        a = b
        b = sum
   }

   return a
};

// Do not edit below this line
module.exports = fibonacci;
