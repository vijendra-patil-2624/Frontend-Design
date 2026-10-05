for any javascript programm is run, at the time global execution context is created in global execution context
there are two phases one is memory allocation phase second one is code execution phase
in first phase the memory will allocate for every variables and functions etc...
in second phase the values can assign their variables

1. java script key words are let, var, const 

# var   ----
    var is function scoped(global scoped),

# let   ----
     let is block scoped,
     this variable cannot be re decleared

# const 
     it is also block scoped 


2. scopes   ------- scope is a place were variable can be access
  # global scope or function scope
   global scope  ---- scope is 



3. data types -----  
there are two  types of data types in js

    1. premittive data types (premittive types)
         premittive data types are stores the single value and these are immutiable(we can't change once created)
         
         those are 
         1. number  2. strings  3. boolian  4. null  5. undifined  6. Symbol  7. big int


    2. non premittive data types(reference types)
         these are the refernce type of data type that stores the collection of values and these are mutabil(we can change the value)

         those are 
         1. array  2. objects  3.functions  



4. Arrays      ----- 

     let arrayname = [value1,value2,value3,value4]  in js they not declered array size
     
     arrayname.pop() ---it is remove one last value in an array
     arrayname.shift() --- this function is use to remove first value in an array

     arrayname.unshift(value1,value2,value3) ---- this function is used to add values in an array
     arrayname.push() ------ this function is push the value in last in an array

     Important Array methods 
     1. .map(callback) ---- 
     2. .filter(callback) 
     3. .find()
     4. .join()


     

5. Objects ----an object is a way to store related data together using key-value pairs.
   
   syntax --------- 
   let variablename = {
      key : value,
   }

   we have 2 types the access the  object properties
     1. dot (.) property

     eg : let myobj = {
          name : "vijay",
          age : 20,
     }
     console.log(myobj.age)

     2. square bracket property

      eg : et myobj = {
          name : "vijay",
          age : 20,
     }
     console.log(myobj["name"])

     3. add properties in object 
          objectname.property = value;

     4. delete property in an object

          delete objname.propertyname or key;
          delete objname[propertyname];
     
     Object methods
     1. Object.keys(objname)  ------- this will return array of key's of an object
     2. Object.values()     --------this will return array of values 
     3. Object.entries()   ------- this will return array of objects
     4. Object.frize()    -------- this will frise the object
     5. Object.seal() -------- this will seil the object 
      

6. Functions ----- a function is a block of code that performs a specific task

     syntax -- 
     function functionName(){

     }
     
     Types of Function

     1. named function or function defination or simple function
      this syntx is ----
      function funname(){

      }

     2. arrow function
      this syntax is ----
      let funname = () => {

      }

     3. function expression
      this syntax is ----
      let funname = function (){

      }

     4. Anonymous Function 
      this syntax is ----
      function() {

      }
      to use anonymous function we need to assine to a perticular variable
      that looks and feels like a function expression

     5. Immediately Invoked Function Expression (IIFE)
     this syntax is -----
      (function() {
       console.log('this is IIFe function')

       })()


7. Paramaters
    whenever we are going to expect the values for the function those values are called as paramaters.


8. Arguments
   whenver we pass the values while calling the function those values are called as arguments

     

