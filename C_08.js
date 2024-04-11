//Palindrome
const p = (str) =>
    str.split("").reverse("").join("")=== str;

const res = p("abba");
const res1 = p("abcde");
console.log(res);
console.log(res1);