function checkPlindrome(str){
let rev=""
 for(i=str.length-1;i>=0;i--){
     rev+=str[i]
 }
    if(rev==str){
      return true
   }
     return false
}
   let ans=checkPalindrome("naman")
  if(ans==true){
   console.log("Palindrome")  
}else{

   console.log("Not Palindrome")
 }