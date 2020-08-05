/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. 
You can guarantee that input is non-negative.
Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/ 

const countBits = function(n) {
    const binaryNumber = n.toString(2);
    return binaryNumber.split('').reduce((acumulator, actual)=> {
      actual == 1 && acumulator++;
      return acumulator;
    })
  };

/*
Write a function that takes an array and a string as input, and returns an array containing the values that has all the letters of the string regardless the order
Example (['casa', 'camisas', 'bicicleta'], 'cas') => ['casa','camisas']
 */

const leFunction = (leArray, leValue) => {
    const leResult = [];
    const leRegex = ".*".concat(leValue.split('').join('.*'));
    const regex = new RegExp(leRegex,'gi');
    leArray.forEach((value) => {
     Array.from(value.matchAll(regex), m => {
       if(m[0].length){
         leResult.push(value);
       }
     });
    });
    return leResult;
}



/*
Write a function that given an array with numbers returns an array with the sum of all digit plus one 
Example ([1,2,3]) => [1,2,4]
*/ 

const increaseMe=(arrValues)=>{
    let result = arrValues.reduce((acumulator, actual)=> acumulator.toString() + actual);
    ++result;
    return result.toString().split('');;
  }