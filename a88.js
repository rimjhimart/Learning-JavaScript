//local and global scope
let a = 8;
{
    console.log(a)  // o/p = 8
}


{
    var c = 6;
}
console.log(c)  //o/p = 6


{
    let b = 4;    // b is not defined for outside the brackets
}
console.log(b) // throw error

// let b are block scope(becoz it is under the function) and let a are local scope
//var c is global scope