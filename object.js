let a;
function greet(){
    console.log("hello");
}
function add(a,callback){
    console.log(a);
    callback();
}
add(5,greet)
let abc=new Set([1,2,3,4,4,56,7,8]);
console.log(abc);

let xy=["grape","Choc","apple"];
let [n,m,v]=xy;
console.log(n,m);
let arr1=[3,7,8,9];
let arr2=[...arr1,4,7,3];
console.log(arr2);
x=9;
console.log(x);
function outer(){
    let name = "Bharani";
    function inner(){
        console.log("Hello " + name);
    }
    return inner;
}
let abcd=outer();
abcd();
