
// creating note on webpages
let n= localStorage.getItem("note")
alert("your note is "+ n)

let a= prompt("Enter your note")
if (a) {
    localStorage.setItem("note", a)
}
let c= confirm("do you want to delete your note?")
if (c) {
    localStorage.removeItem("note")
    alert("Note deleted succesfully")
}