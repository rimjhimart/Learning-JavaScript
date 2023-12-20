//cookie used to store data

console.log(document.cookie)
document.cookie = "name=sugar2367"  // storage of name is only 4kb
document.cookie = "name2=sugar8967"   //new cookie get added
document.cookie = "name=sugar"       // name will get updated
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// to decode in inspect use decode uri component
console.log(document.cookie)
