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
