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

//count vowels and consonants
function countVowelsAndConsonants(str) {
  let vow = 0;
  let con = 0;
  let obj = { vowels: 0, consonants: 0 };
  arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] == "a" ||
      arr[i] == "e" ||
      arr[i] == "i" ||
      arr[i] == "o" ||
      arr[i] == "u"
    ) {
      vow++;
    } else if (arr[i] >= "a" && arr[i] <= "z") {
      con++;
    }
  }
  obj.vowels = vow;
  obj.consonants = con;
  return obj;
}
console.log(countVowelsAndConsonants("hello world@#$ %^123456")); // { vowels: 3, consonants: 7 }

// find the longest word of the string
function findLongestWord(str) {
  let longestWordLen = 0;
  let longestWord = "";
  arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= longestWordLen) {
      longestWordLen = arr[i].length;
      longestWord = arr[i];
    }
  }
  return `${longestWord}=${longestWordLen}`;
}
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // "jumps"

//write a string in title case
function titleCase(str) {
  let newArr = [];
  arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
  }

  return newArr.join(" ");
}
console.log(titleCase("I'm a little teA pot")); // "I'm A Little Tea Pot"

//replace a replaceSubstrings
function replaceSubstrings(str, substr, replcWord) {
  let result;
  arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(substr)) {
      arr[i] = arr[i].replace(substr, replcWord);
    }
  }
  return arr.join(" ");
}
console.log(
  replaceSubstrings("The rain in Spain stays mainly in the plain", "ain", "123")
);
// "The r123 in Sp123 stays m123ly in the pl123"

//check areAnagrams
function areAnagrams(str1, str2) {
  let sortedStr1;
  let sortedStr2;
  if (str1.length === str2.length) {
    sortedStr1 = str1.split("").sort().join();
    sortedStr2 = str2.split("").sort().join();
  }
  return sortedStr1 === sortedStr2;
}
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
