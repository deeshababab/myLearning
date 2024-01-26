function changeText(){
   const arr=['a','e','i','o','u'];
   const value=document.getElementById('text').value;
   
   let cnt=0;
   for(let i=0;i<value.length;i++)
   {
     if(arr.includes(value[i].toLowerCase()))
     {
         cnt++
     }
   }
   document.getElementById('demo').innerHTML=cnt;
}

// Object

function myObject()
{
   const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue",address:function() {
      return this.firstName + " " + this.lastName;
    }};
   let str=new String("deekshitha")
   let x = "John";
   let y = "John";
   document.getElementById('demo').innerHTML=x==y
   // checkValidation(onSuccess,onFailure)
}
function onSuccess()
{
   return "Success"
}

function onFailure()
{
   return "Failure"
}
// Callback function example
function checkValidation(onSuccess,onFailure)
{
   if(document.getElementById('text').value)
   {
      (function(){
         var a = b = 42;
       })();
        
       console.log(typeof a);
       console.log(typeof b);
      console.log(onSuccess())
   }
   else
   {
      console.log(onFailure())
   }
}