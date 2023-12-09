<<<<<<< HEAD
// Practice #1
console.log("Practicing JavaScript part-1 ");
//for declearition we use "consol.log()" the printing statement used as in the other languages... 
console.log("hello world");

var b="Alok";//VAR variable is tha oldest form used in previous javascript
//using VAR variable is decleared once and folled same as if for the blocks also 
var x="alok";
    {
        var x=22;
        console.log(x);
    }
    console.log(x);
var c=23.4 ;
var d=null;
var e=undefined;
{
    let a=34;
    console.log(a);
}
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

const A="ALOK"; //Const varibale is that is cannot be changed "once decleared it can't be changed"
console.log(A);
const y="alok";
console.log(y);
let a=10; //"LET" varibale don't make the ERROR same as of the VAR varible for each block the decleariation is diffrent which does not folled as in the VAR variable....
{
    let a="alok";
    {
        let a=22;
        console.log(a);
    }
    console.log(a);

}
console.log(a);
=======
//html file
/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio website</title>    (website name)
    <link rel="stylesheet" href="f1.css">       (linking css file)
</head>
<body>
    <nav>
        <ul>
            <li>Home</li>
            <li>About me</li>          (content)
            <li>Hire me</li>
        </ul>
    </nav>
    <div  class="container">
          <p>hey i am here to know something</p>
    </div>
    <script src="new.js"></script>
</body>
</html>*/

//css file
/*html, body {
     height: 100%;
     width: 100%;
     margin: 0;
     padding: 0;
}

ul{
    display: flex;
    background: gray;
    margin: 0;
    padding: 15px 0;
    color: white;
}
ul li{
     list-style: none;
     margin: 0 23px ;
}*/


//javascript file

const changeBodyRed = () => {
    document.body.firstElementChild.style.background = "skyblue"
}

let b = document.body
console.log("first child of b is: " , b.firstChild)
console.log("first element child of b is: " , b.firstElementChild)
>>>>>>> 1af1dba (trial to make a website)
