function checkPrime(num){

let count_factors=0
 
for(i=1;i<=num;i++){

if(num%i==0){
   
count_factors++

  }
 
if(count_factors==2){
    
return true
  
   }
    
 return false
  
}
   let ans=checkPrime(13);

if(ans==true){
    
    console.log("Prime Number")
   
}else{
  console.log("Not Prime Number")

}