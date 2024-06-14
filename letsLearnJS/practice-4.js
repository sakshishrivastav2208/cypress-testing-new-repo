//return array intersection
function arrayIntersection(arr1, arr2) {
  let newarr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newarr.push(arr2[j]);
      }
    }
  }
  return newarr;
}
console.log(arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6]));
//longest word in sentence
function findLongestWord(sentence) {
  let largeWord = 0;
  let arr = sentence.split(" ");
  for (let i = 0; i < arr.length; i++) {
    str = arr[i];
    console.log(str.length);
    if (largeWord <= str.length) {
      largeWord = str.length;
    }
  }
  return largeWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: "jumped"
//removeElementFromArray
function removeElementFromArray(arr, value) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
console.log(removeElementFromArray([1, 2, 3, 2, 4, 2, 5], 2)); // Output: [1, 3, 4, 5]

//findSecondLargest
function findSecondLargest(arr) {
  let newarr = [];
  newarr = arr.sort((a, b) => a - b);
  const len = newarr.length;
  return newarr[len - 2];
}
console.log(findSecondLargest([10, 5, 20, 8])); // Output: 10
console.log(findSecondLargest([1, 2, 3, 4, 5])); // Output: 4

//countCharacterOccurrences
function countCharacterOccurrences(str) {
  let newarr = [];
  let count = 0;
  arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    arr.forEach((item) => {
      if (arr[i] === item) {
        count++;
      }
    });
    newarr.push(arr[i] + ":" + count);
    count = 0;
  }
  return newarr;
}
console.log(countCharacterOccurrences("hello world")); // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

//update value of parameter of an object
person = {
  name: "sakshi",
  age: "27",
  city: "indore",
};
function updateCity(obj, newCityname) {
  obj.city = newCityname;
  return person;
}
console.log(updateCity(person, "ujjain"));

//filter the threshold score object only
let students = [
  { name: "sakshi", score: 80 },
  { name: "kirti", score: 50 },
  { name: "heena", score: 60 },
];
function filterThreshold(obj) {
  let newArray = [];
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].score >= 60) {
      newArray.push(obj[i]);
    }
  }
  return newArray;
}
console.log(filterThreshold(students));

//sum of all properties of object
const numbers = {
  a: 10,
  b: 20,
  c: 30,
};
function sumofall(obj) {
  let sum = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      sum += obj[key];
    }
  }
  return sum;
}
console.log(sumofall(numbers));

//deepClone
const obj8 = {
  a: 10,
  b: 85,
  c: { x: 55, y: 66 },
  d: [{ name: "sakshi" }, { age: 5 }],
};
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj)); //converting it into string then again into json object
}
const newobj = deepClone(obj8);
console.log(newobj);

//merging two objects via spread operator
const obj1 = { a: 1, b: { x: 10, y: 20 } };
const obj2 = { b: { x: 30, y: 40 }, c: 4 };
obj3 = { ...obj1, ...obj2 };
console.log(obj3);
//this does not do deep merge

//merging two objects via assign operator
let obj4 = { a: 1, b: { x: 10, y: 20 } };
let obj5 = { b: { x: 30, y: 40 }, c: 4 };
obj6 = Object.assign({}, obj4, obj5);
console.log(obj6);
//this does not do deep merge
