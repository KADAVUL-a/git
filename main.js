let a = 10;
let b = 10.9;
let c = "sabari"
let d = true;
let e = 123456788;
console.log(e);
 a = '+';
 b = 1;
 let j=1;
 let f = a+b;
 let g = a-b;
 let h = a*b;
 let i = a/b;
 let l = a**b;
 console.log(f && g);
 console.log(f || g);
 console.log(a == b);
 console.log(a != b);
 console.log(a,b);
 console.log((a&&b)+","+(b&&j));
if (a == b){
    console.log("a is equal to b");
}
if(b == j)
{
    console.log("b is = j");
}
else {
    console.log("not equal");
}

switch(a){
    case '+': console.log("add");
    break;
    case '-':console.log("sub");
    default: comsole.log("error");
}
for (let i = 100; i >= 0; i--) {
    console.log("Count: "  +i);
}

let o = 10;
if (o%2 == 0){
    console.log("Even");
}
else{
    comsole.log("Odd");
}

for(let i=1 ; i<=100 ;i++){
    console.log("num: " +i);
}
while(i<=10){
    console.log("num : " +i);
    i++;
}
a=5;
b=6;
function add(a,b){
    return a+b;
}
console.log(add(a,b));
a = "sabari"
function name(a){
    return "hello "+a+" !!!";
}
console.log(name(a));
// map , filter, reduce.
let sub;
a=10;
b=10;
sub = (a,b) => {console.log(a-b);}

let num = [1,2,3,4,5]
//reduce - add of all num;
let num1 = num.reduce((a1, b1) => a1+b1,0);
console.log(num1);
//map - changes in the num;
let mapp = num.map(a => a*a);
console.log(mapp);
//filter - picking some specifc elemets like odd r even;
let fil = num.filter(a => a%2 == 0);
console.log(fil);


let std1 = "abhinav";
let std2 = "abisheck";
let std3 = "bharani";
let std4 = "dheekshi";
let std1_mark = [90,98,97,95,100];
let std2_mark = [96,80,87,95,100];
let std3_mark = [89,77,87,88,100];
let std4_mark = [77,88,66,77,100];
let std1t = std1_mark.reduce((a1, b1) => a1+b1,0);
console.log("student 1 total : ",std1t);
let std2t = std2_mark.reduce((a1, b1) => a1+b1,0);
console.log("student 2 total : ",std2t);
let std3t = std3_mark.reduce((a1, b1) => a1+b1,0);
console.log("student 3 total : ",std3t);
let std4t = std4_mark.reduce((a1, b1) => a1+b1,0);
console.log("student 4 total : ",std4t);
let arr = [std1t,std2t,std3t,std4t];
let filt = arr.filter(arr => arr>450) ;
console.log("mark more than 450 : ",filt);
/*let mark;
let r;
let stu = [{
    name:"stu1",
    mark: [10,19,29,20,20],
    r: mark.reduce((a, b) => a+b,0)
},
{
    name: "stu2",
    mark: [10,9,29,20,20],
    r: mark.reduce((a, b) => a+b,0)
},
{
    name: "stu3",
    mark: [10,19,9,20,20],
    r: mark.reduce((a, b) => a+b,0)
}]
console.log(stu.r);

callback(){

}*/

/*function greet() {
    console.log("Hello!");
}

function add(a, callback) {
    console.log(a);    
    callback();             
}

add(5, greet);*/

let sett = new Set([0,0,9,8,7,7,76,56,6]);
console.log(sett);
console.log(sett.add(99));
//add,del,has,clear,size
console.log(sett.clear(9));