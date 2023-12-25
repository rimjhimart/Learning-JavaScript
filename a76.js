class RailwayForm{
    submit(){
        alert(this.name + ": form submitted for train no. "+ this.trainno)
    }
    cancel(){
        alert(this.name + ": this form is cancelled for train no" + this.trainno)
    }
    fill(givenname, trainno){
        this.name = givenname
        this.trainno = trainno
    }
}

//create a form for simmer
let simmerForm = new RailwayForm()
//fill form with simmer details
simmerForm.fill("sugar", 15442)

//create form for rohan
let rohanForm1 = new RailwayForm()
let rohanForm2 = new RailwayForm()
//rohan details
rohanForm1.fill("Rohan",12223)
rohanForm2.fill("Rohan",12323)

simmerForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()