let arr = [3, 5, 6, 5, 15, 19, 20]

// no need to dothis
//let a = arr[0]
//let b = arr[1]
let [a, b, ...rest] = arr
console.log(a,b, rest )   

let arr2 = [5, 9, 16, 17, 12, 13]
let{c, d} = {c: 2, d: 8}
console.log(c, d)


let obj1 = {...arr2}
console.log(obj1)

function sum(v1, v2, v3, v4, v5){
    return v1+v2+v3+v4+v5
}
console.log(sum(...arr2))

let obj2 = {
    name: "Sugar",
    company: "XYZ",
    address: "samratpur"
}

console.log({...obj2, name: "john"})// print obj2 with the changes
console.log({name: "john", ...obj2, })  //print obj2 without any changes