function capitalize(str){
return str
    .split(" ")
    .map((word) => word[0].toUpperCase()+word. slice(1))
    .join(" ");
}
const res = capitalize("hello there");
const res1 = capitalize("hello everyone my name is spiderman");

console.log(res); //Hello There
console.log(res1);//Hello Everyone My Name Is SpiderMan