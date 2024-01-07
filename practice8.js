let a = {
    name2: "Alok",
    language: "JavaScript",
    run: () => {
      alert("self run")
    }
  }
  console.log(a)
  
  
  let p = {
    run: () => {
      alert("run")
    }
  }
  
  p.proto = {
    name: "Jackie"
  }
  
  a.proto = p
  a.run()
  console.log(a.name)