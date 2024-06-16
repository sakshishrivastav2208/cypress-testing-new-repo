//capitalizeEveryOther
function capitalizeEveryOther(str) {
  let n = [];
  arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 == 0) {
        n.push(arr[i][j].toUpperCase());
      } else {
        n.push(arr[i][j]);
      }
    }
  }
  return n.join("");
}
console.log(capitalizeEveryOther("hello world")); // "HeLlO WoRlD"

//sortString
function sortString(str) {
  arr = str.split("");
  return arr.sort().join("");
}
console.log(sortString("javascript")); // "aacijprstv"

//extract a substring after a character
function substringAfterChar(str, char) {
  let str1;
  arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === char) {
      str1 = arr.slice(i + 1).join("");
      break;
    }
  }
  return str1;
}
console.log(substringAfterChar("hello world", "o")); // " world"

//index of first Vowel
function indexOfFirstVowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      return i;
    }
  }
  return -1;
}
console.log(indexOfFirstVowel("javascript")); // 1
console.log(indexOfFirstVowel("rhythm")); // -1

//containsAllChars
function containsAllChars(str, substr) {
  str1 = str.toLowerCase();
  substr1 = substr.toLowerCase();
  for (let n of substr1) {
    if (!str1.includes(n)) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(containsAllChars("javascript", "java")); // true
console.log(containsAllChars("hello world", "WORLD")); // true
console.log(containsAllChars("hello", "sakshi")); // false
