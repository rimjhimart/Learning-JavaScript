//session storage

/*sessionStorage.setItem("name","sugar")
sessionStorage.clear()
sessionStorage.removeItem
sessionStorage.setItem*/


//will give alert when the value to the same key is
//changed and gives the storage event info
window.onstorage = (e)=>{
    alert("changed")
    console.log(e)
}