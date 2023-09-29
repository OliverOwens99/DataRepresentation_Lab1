console.log("Hello");

const sayHi = function Hello() {
    console.log("Hi");



}

sayHi();

let sayBye = ()=>{
    console.log("bye");

}

//Part1 a - d I called them exercises to be confusing
//exercise 1 
let exercise1 = ()=>{
    console.log("Data Representation & Querying");
}
exercise1();


//exercise 2  passing in a variable 

var name = "Olly";

let exercise2 = (name)=>{
    return name;
}
console.log(exercise2(name));

//exercise 3 summing variables

 var num1 = 10;
 var num2 = 5;

 let exercise3 = (num1,num2)=>{
    var sum = num1 + num2;
    return sum;
 }

 console.log(exercise3(num1,num2));

 //exercise 4 map function that multiplies all numbers under 70 * 2



 const ages = [25, 31, 42, 77];

 let exercise4 = ages.map((item)=>{

    if (item < 70){
        return item * 2;
    }else{
        return item;
    }

    

 });

 console.log(exercise4);