//let student = ["ram","sam","sita"]

let ram = {
    name : "ram",
    age : 20,
    marks : 50,
}

let sam = {
    name : 'sam',
    age : 21,
    marks : 70,
}

let sita = {
    name : "sita",
    age : 22,
    marks : 90,
}

let student = [ram,sam,sita]

console.log(student)

console.log(ram.name)
console.log(sam.marks)
sita.age = 50
console.log(sita.age)

let vijay = {
    name : "vijay",
    age : 20,
    marks : 99,
}

student.unshift(vijay)

console.log(student)