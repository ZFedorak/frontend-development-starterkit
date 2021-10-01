import makeElement from "../../utlils/makeElement"
const header = function (title="uiHeader"){
  const template = `<h1 class="temp">${title}</h1>`
  // check for valid element
    const element = makeElement(template)



  return element
}

export default header