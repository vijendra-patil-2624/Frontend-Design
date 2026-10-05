/* var abc=22
let num=25
const name="vijay"
  */
 var num = 20        //is function or Global  scoped variable
 //let mynum = 55        // is block scoped variable
 const con = 22      // is block scoped variable

/* if(true){
    
    let mynum = 23
    console.log(mynum)
    mynum = 44
    console.log(mynum)
}

if(true){
    console.log(mynum)
}

console.log(mynum)

console.log(typeof window)
 */


/* console.log(mynum)

if(true){
    var mynum = 20
    console.log(mynum)
}
var mynum = 40
console.log(mynum)
 */
//console.log(con)

/* function myfun(){
    var num = 10
    console.log(num)
}

myfun()

console.log(num) */

function myfun(){
    var num = 10
    console.log(num)
    if(true){
        var num = 40
        console.log(num)
    }
    console.log(num)
}

myfun()

console.log(num)

 



 
