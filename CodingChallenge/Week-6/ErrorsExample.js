/* Write a function which takes two parameters a and b and return the value of a/b.

You are required to throw the error("Only Numbers are allowed and divisor should be greater than 0 ")  if a or b is not a number or if b is not greater than 0.

Else print the (“Answer after dividing a by b will be,answer);

You should call the above function at least 2 time with different value of a and b to cover all edge cases. */

function divide(a,b){
    if(typeof a === 'number' && typeof b=== 'number' && b>0)
     return a/b;
    else
    throw new Error("Only Numbers are allowed and divisor should begreater than 0 ")
}
try{
    var a=40;
    var b=0;
    console.log("Answer after dividing ",a," by ",b ,"Will give :",divide(a,b));
}
catch(error){
    console.log(error.message);
}
