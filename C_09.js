//create a function which takes a number as input and prints 
// "Fizzz" if the number is divisible by 3
// "Buzz" if it's divisible by 5
// "Fizzbuzz" if the number is divisible bt both 3 and 5 and the number itself if the number is not divisible by 3 or 5

const  fizzbuzz = (n) => {
    return n % 3 == 0 && n % 5 == 0
    ? 'FizzBuzz' 
    :  n % 3 == 0 
    ? 'Fizz' 
    : n % 5 == 0  
     ? 'Buzz' 
    : `${n}`;
};
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));
console.log(fizzbuzz(9));