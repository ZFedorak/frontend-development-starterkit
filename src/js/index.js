import header from "./components/header/header"
import button from "./components/button/button"

const app = document.querySelector('#app')

//app.appendChild(header("To Do List App"))


app.appendChild(button('click me'))
// reference to the APP container
// element document.createElement
// `` template literal syntax
// templating engine

/*
const markup = header("To Do App")
// what methods insert markup into the DOM
console.log(markup)
// using a string
//(try to avoid using) innerhtml ----> causes the browser to rerender the page.. 
app.innerHTML =  "<button>something new</button>"
// doesn't cause a rerender it only inert that string.
app.insertAdjacentHTML('beforebegin', "<p>zack zack zack</p>")

// append prepend remove NODE
*/