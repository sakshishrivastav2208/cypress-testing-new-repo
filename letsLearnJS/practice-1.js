//task-1:calculator with operator as parameter
function calculator(a, b, c) {
  if (c == "+") {
    return a + b;
  }
  if (c == "-") {
    return a - b;
  }
  if (c == "*") {
    return a * b;
  }
  if (c == "/") {
    return a / b;
  }
}
console.log(calculator(5, 2, "+"));
console.log(calculator(5, 2, "-"));
console.log(calculator(5, 2, "*"));
console.log(calculator(5, 2, "/"));
//task-2: make first letter uppercase of every word of string-with nested loop
function manipulator(str) {
  const arr = str.split(" ");
  let result = [arr.length];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0) {
        result[i] = arr[i][j].toUpperCase();
      } else {
        result[i] += arr[i][j];
      }
    }
  }
  console.log(result);
  console.log(result.join(" "));
}
console.log(manipulator("i m the best girl"));
//task-3: make first letter uppercase of every word of string-with one loop
function manipulator(str) {
  let result = [0];
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return result.join(" ");
}
console.log(manipulator("i m the best girl"));
//task-4:function that return only even numbers of an array
function evenNumberSelector(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}
const arr = [5, 5, 3, 5, 5, 6, 7, 8];
console.log(evenNumberSelector(arr));
//task-5:creating object and calling its properties defined
const book = {
  author: "sakshi",
  title: "my book of life",
  numberofpages: 50,
  summary: function () {
    return `${this.title} by ${this.author} with pages ${this.numberofpages}`;
  },
};
console.log(book);
console.log(book.author);
console.log(book.summary());

//convert it into toCamelCase
function toCamelCase(str) {
  arr = str.split(" ");
  console.log(arr);
  let n = [];
  n.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    n.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
  }
  return n.join("");
}
console.log(toCamelCase("hello-world_example string")); // "helloWorldExampleString"

//remove removeCharacter
function removeCharacter(str, char) {
  let n = [];
  arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== char) {
        n.push(arr[i][j]);
      }
    }
  }
  return n.join("");
}
console.log(removeCharacter("hello world", "o")); // "hell wrld"
