 let frutes = ["apple", "bananna","mango", "grapes", "papaya"]

console.log("1st frute is :",frutes[0],"last frute is:  ",frutes[4])

frutes[0] = "ananas"
frutes[4] = "strobarry"

console.log(frutes)  

let deleted = frutes.pop()
console.log(deleted)

console.log(frutes.pop())



console.log(frutes.shift())
frutes.unshift("vijay","sudeep")
console.log(frutes)
frutes.push("pramod")
console.log(frutes)
 


/* let student = {
    name : "vijendra",
    age : 20,
    course : "CS",
    city : "Haveri",
    marks : 95,
}
console.log(student.name)
console.log(student["city"])

student.city = "Bengaluru"

console.log(student["city"])

student.ispass = "yes"

console.log(student) */
