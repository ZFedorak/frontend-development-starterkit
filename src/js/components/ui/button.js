import makeElement from "../../utlils/makeElement";
const button = function (label = "ui button", className="ui button"){
  const template =`<button class="${className}">${label}</button>`
  const element = makeElement(template);

  return element
}

export default button

/*class Element extends HTMLAllCollection {
constructor{



    }



}*/

    
/*import makeElement from "../../utlils/makeElement"



const button = function (title = "uiButton"){

    const template = ` <button class="button">${title}</button>`

    const element = makeElement(template)

    console.log(element.nodeType)



    return makeElement(template)

}



export default button*/