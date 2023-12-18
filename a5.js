try {
    harry
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}
try {
    throw new ReferenceError("harry is not good")
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}
try {
    console.log(harry)
    throw new ReferenceError("harry is not good")
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)

}
try {
    let age= prompt("enter your age")
    age= Number.parseInt(age)
    if (age>150) {
        throw new ReferenceError("this is probably not true")
    }
    
} catch (error) {
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}
console.log("the script is still running")