let str="amam"
function Plindrome(str){
let new_str=""
 for(i=str.length-1;i>=0;i--){
     new_str+=str[i]
 }
return new_str
}
let rev=reverse(str);
if(str==rev){
console.log("is a palindromic string");
}else{
console.log("Not a palindrome");
}