// Find the previous smaller number to a given number having the same digits.
// If no such number exists return -1

function previousSmallest(number){
  let newNumber=number;
do{
  newNumber=newNumber-1;
  if(newNumber==0){
    return -1;
  }
}
while(!checkSameDigits(number,newNumber));
return newNumber;
}
function checkSameDigits(number1,number2){
  let num1Arr=number1.toString().split('').sort();
  let num2Arr=number2.toString().split('').sort();
  return arrayEquals(num1Arr,num2Arr);
}
function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}
console.log(previousSmallest(9));
console.log(previousSmallest(2134));
console.log(previousSmallest(21));