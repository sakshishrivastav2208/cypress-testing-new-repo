//sum the Array
function sumArray(arr) {
  let s = 0;
  for (let i = 0; i < arr.length; i++) {
    s = s + arr[i];
  }
  return s;
}
console.log(sumArray([1, 2, 3, 4]));

//sum of Array with forEach function
function sumArray(arr) {
  let sum = 0;
  arr.forEach((item) => {
    sum += item;
  });
  return sum;
}
console.log(sumArray([5, 12, 3, 0]));

//count vowels
function countVowels(str) {
  let count = 0;
  arr = str.split("");
  arr.forEach((item) => {
    if (
      item === "a" ||
      item === "e" ||
      item === "i" ||
      item === "o" ||
      item === "u"
    ) {
      count++;
    }
  });
  return count;
}
console.log(countVowels("sakshi"));

//reverse words
function reverseWords(str) {
  arr = str.split(" ");
  let newarr = [arr.length - 1];
  let j = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    newarr[j - i] = arr[i];
  }
  return newarr;
}
console.log(reverseWords("hello my world"));

//truncate string
function truncateString(str, num) {
  if (str.length < num) {
    return str;
  } else {
    let newarr = [];
    arr = str.split("");
    for (let i = 0; i <= 20; i++) {
      newarr += arr[i];
    }
    return newarr + "...";
  }
}
console.log(truncateString("A quick brown fox jumps over the lazy dog", 20));

//flatted Array
function flattenArray(arr) {
  let newarr = arr.join("").split("");
  let newarr1 = [];
  for (let i = 0; i < newarr.length; i++) {
    if (newarr[i] !== ",") {
      newarr1.push(parseInt(newarr[i]));
    }
  }
  return newarr1;
}
console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));

//removeDuplicates
function removeDuplicates(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr1.includes(arr[i])) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}
console.log(removeDuplicates([1, 2, 2, 1, 3, 4, 4, 2, 5, 5, 5])); // Output: [1, 2, 3, 4, 5]
