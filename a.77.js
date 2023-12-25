class RailwayForm{
    constructor(givenname, trainno){
        this.name = givenname
        this.trainno = trainno
    
        console.log("CONSTRUCTOR CALLED" + givenname +" " + trainno)
    }
    submit(){
        alert(this.name + ": form submitted for train no. "+ this.trainno)
    }
    cancel(){
        alert(this.name + ": this form is cancelled for train no" + this.trainno)
    }

}

//create a form for simmer
let simmerForm = new RailwayForm("sugar", 15442)
//fill form with simmer details
//simmerForm.fill

//create form for rohan
let rohanForm1 = new RailwayForm("Rohan",12223)
let rohanForm2 = new RailwayForm("Rohan",12323)
//rohan details
//rohanForm1.fill("Rohan",12223)
//rohanForm2.fill("Rohan",12323)

simmerForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()