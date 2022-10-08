const max = (num1, num2) => num1 > num2 ? num1 : num2;

const maxOfThree = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3)   return num1;
  if (num2 > num1 && num2 > num3)  return num2;
  else  return num3;
};

const isVowel = (character) => {
   let vowel = 'aeiou';
    for(i =0; i < vowel.length; i++){
        if(character === vowel[i])  return true;
    }
    return false;
}

const sum = (listOfNumbers) => {
   let sum = 0;
   listOfNumbers.forEach(num =>  sum  += num);
   return sum;
}

const multiply = (listOfNumbers) => {
    let multiply = 1;
    listOfNumbers.forEach(num => multiply = multiply * num)
    return multiply;
}

const reverse = (word) => {

let splitWord = word.split('');
 const reversed = splitWord.reverse()

return reversed.join('')

}

const findLongestWord = (listOfWord) =>{
    let lonsgestWord = '';
    for(let i=0; i<listOfWord.length; i++){
        if(listOfWord[i].length > lonsgestWord.length ) {
            lonsgestWord = listOfWord[i];
        }
    }
    return lonsgestWord.length;
}

const filterLongWords = (word, length) => {
    let listOfArray = [];
    for(let i=0; i<word.length; i++){
        if(word[i].length > length) {
            listOfArray.push(word[i])
        }
    }

    console.log(listOfArray);
    return listOfArray;
}

const multiplyByTen = (listOfNumbers) => listOfNumbers.map((elem, i, array) => elem * 10);
const filterElemetEqualToThree = (listOfNumbers) => listOfNumbers.filter(item => item === 3);
const productOfNumber = (listOfNumbers) => listOfNumbers.map(item => item * item);



    
const myFunctionTest = (testNum, result) => {
  if (testNum === result) return "TEST SUCCEEDED";
  else return "TEST FAILD";
};

const myMaxFunctionTest = (testNum, result) => {
  if (testNum === result) return "TEST SUCCEEDED";
  else return "TEST FAILD";
};

const myIsVowelFunctionTest = (result) => {
    if (result) return "TEST SUCCEEDED";
  else return "TEST FAILD";
}

const mySumAndMultFunctionTest = (testNum, result) => {
    if (testNum === result) return "TEST SUCCEEDED";
    else return "TEST FAILD";
  };

  const myReverseFunctionTest = (testWord, result) => {
    if (testWord === result) return "TEST SUCCEEDED";
    else return "TEST FAILD";
  };

  const myLongestFunctionTest = (num, result) => {
    if (num === result) return "TEST SUCCEEDED";
    else return "TEST FAILD";
  };

  const myLongWordsFunctionTest = (words, result) =>{
    if (words.length === result.length && words.every((value, index) => value === result[index])) return "TEST SUCCEEDED";
    else return "TEST FAILD";
  }

console.log(
  "1 Expected output of max(20, 10) is 20 and  " +
    myMaxFunctionTest(20, max(20, 10))
);
console.log(
  "2 Expected output of maxOfThree(30, 10, 45) is 45 and  " +
    myMaxFunctionTest(45, maxOfThree(30, 10, 45))
);

console.log(
    "3 Expected output of isVowel(a) is true and  " +
    myIsVowelFunctionTest(isVowel("a"))
  );

  console.log(
    "4 A Expected output of sum([1,2,3,4]) is 10 and  " +
    mySumAndMultFunctionTest(10, sum([1,2,3,4]))
  );

  console.log(
    "4 B Expected output of multiply([1,2,3,4]) is 24 and  " +
    mySumAndMultFunctionTest(24, multiply([1,2,3,4]))
  );

  console.log(
    "5 Expected output of reverse(\"jag testar\") is jag testar and  " +
    myReverseFunctionTest("ratset gaj", reverse("jag testar"))
  );

  console.log(
    "6 Expected output of findLongestWord([\"a\", \"ab\", \"abc\", \"abcd\", \"k\", \"longest one\"]) is 11 and  " +
    myLongestFunctionTest(11, findLongestWord(["a", "ab", "abc", "abcd", "k", "longest one"]))
  );

  console.log(
    "7 Expected output of filterLongWords([\"a\", \"ab\", \"abc\", \"abcd\", \"k\", \"longest one\"], 3) is ['abcd', 'longest one'] and  " +
    myLongWordsFunctionTest(['abcd', 'longest one'], filterLongWords(["a", "ab", "abc", "abcd", "k", "longest one"], 3))
  );

  console.log("8 A Expected output of multiplyByTen([1,3,5,3,3]) is " + multiplyByTen([1,3,5,3,3]));
  console.log("8 B Expected output of filterElemet([1,3,5,3,3]) is " + filterElemetEqualToThree([1,3,5,3,3]));
  console.log("8 C Expected output of productOfNumber([1,3,5,3,3]) is " + productOfNumber([1,3,5,3,3]));

  

  

  

  
  


