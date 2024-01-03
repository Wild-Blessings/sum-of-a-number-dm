function sum (num){
  let checkSum = (num * (num + 1)) /2
  return checkSum;
  
}
let as = sum(100);
console.log(as);

let num = document.getElementById('num');
let button = document.getElementById('button');
let display = document.getElementById('display');
function vanny (){
  let numvalue = num.value;
  let n = 0;
  for (let i = 0; i <= numvalue; i++){
    n = n + i;
  }
  console.log(n)
  console.log('original input ' + 'is ' + numvalue)
  display.innerHTML = "The sum of " + numvalue +" is " + n
}
button.addEventListener('click',vanny)
//https://github.com/Wild-Blessings