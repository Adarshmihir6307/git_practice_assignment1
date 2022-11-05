
function checkPrime(num){
let count=0
for(i=0;i<=num;i++){

if(num%i==0){
count++;
}
}
if(count==2){
return true;
}
else{
return false;
}
}
let ans=checkPrime(17);
if(ans==true);{
console.log("Prime");
}else{
console.log("Not a Prime ")
}