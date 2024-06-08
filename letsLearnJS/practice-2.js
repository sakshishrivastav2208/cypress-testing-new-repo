//task-1:to convert Celsius to Fahrenheit.
function tempConvertor(C) {
  let F = (C * 9) / 5 + 32;
  return F;
}
console.log(tempConvertor(5));

//task-2:to reverse a string
function rever(str) {
  let rev = str.split("").reverse().join("");
  return rev;
}
console.log(rever("sakshi"));

//task-3:to find the largest number from an Array
function findLargest(arr) {
  let larg;
  larg = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= larg) {
      larg = arr[i];
    }
  }
  return larg;
}
console.log(findLargest([4, 5, 28, 8, 6, 10]));

//task-4:count number of occurance
function occ(arr, mynum) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == mynum) {
      j++;
    }
  }
  return j;
}
console.log(occ([1, 2, 5, 6, 6, 2, 2], 6));

//task-5:check the valid email address
function checkEmail3(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

console.log(checkEmail3("sakshishr@gmail.com")); // true
console.log(checkEmail3("invalid-email")); // false

// test is the method to compare string with regex
