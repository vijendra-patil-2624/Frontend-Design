/* var num = 10
console.log(num)
if (true){
    var num = 20
    console.log(num)
}
var num = 30
if (true){
    console.log(num)
}                               // var is golobal or function scoped variable 
console.log(num)  */               // once we can create the latest value can access anyware in the block


/* let mynum = 10
console.log(mynum)
if(true){
    let mynum = 20
    console.log(mynum)  //it can access in side the block  20
}
if (true){
    console.log(mynum)  //it can access it's parental block 10
}                           //let is block scoped varible  */

const name = "vijay"
console.log(name)
if (true){
    const name = "sudeep"
    console.log(name)
    if (true){
        console.log(name)
    }
}

if(true){
    console.log (name)
}