let a = document.getElementsByTagName('div')[0]
console.log(a)
//a.innerHTML + <h1>Hello world!</h1>

let div = document.createElement('div');
div.innerHTML = '<h1>Hello World!</h1>';

//a.append(div);  // after the container txt

a.prepend(div);  // on the top of the container txt

//a.before(div);   // outside the container but in the upper area

//a.after(div);   // outside the container but in the lower area

//a.replaceWith(div);  // replace the div with "hello world"
