//1
const loadscript = async (src)=>{
    return new Promise((resolve, reject)=>{
        let script= document.createElement("script")
        script.src = src
        script.onload=()=>{
            resolve(src + "  done success")
        }
        document.head.append(script)
    })
}
//2
/*let a = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
a.then((value)=>{
    console.log(value)
})

//1
const main1 = async()=>{
    let a = await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
    console.log(a)
}
main1()*/
//3
 let p= ()=>{
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(new Error("Please this is not acceptable"))
    }, 3000)
 })
}
 let c = async()=>{
    try {
        let d=await p()
    console.log(d)
    } catch (error) {
        console.log("this is handled error")
    }
    
 }
 c()

 //4
 let p1= async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10)
        }, 2000)
    })
 }
 let p2= async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(20)
        }, 1000)
    })
 }
 let p3= async()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(30)
        }, 3000)
    })
 }
 const run=async()=>{
    console.time("run")
    //let b1= await p1()
    //let b2= await p2()         this waits for each to complete the move to next
    //let b3= await p3()

    let b1= p1()
    let b2= p2()
    let b3= p3()
    let b1b2b3= await Promise.all([b1,b2,b3])
    console.log(b1b2b3)
    //console.log(b1,b2,b3)
    console.timeEnd("run")
 }
 run()