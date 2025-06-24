console.log("First");
setTimeout(()=>{
    console.log("second,settime");
},2000);
console.log("end");

let a = 1;
let b = setInterval(() => {
  console.log(a);
  a++;
  if (a > 5) {
    clearInterval(b); 
  }
}, 1000);
