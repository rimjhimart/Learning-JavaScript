class RailwayForm{
    constructor(givenname, trainno, address){
        console.log("CONSTRUCTOR CALLED" + givenname +" " + trainno)
        this.name = givenname
        this.trainno = trainno
        this.address = address
    }
    preview(){
        alert(this.name +" with your address  " + this.address + "  : Your for train no. "+ this.trainno )
    }
    submit(){
        alert(this.name + ": form submitted for train no. "+ this.trainno)
    }
    cancel(){
        alert(this.name + ": this form is cancelled for train no " + this.trainno)
        this.trainno = 0
    }
}

let sugarForm= new RailwayForm("sugar", 14552, "Lajpat Nagar, New Delhi-54164")
sugarForm.preview()
sugarForm.submit()
sugarForm.cancel()