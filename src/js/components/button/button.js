import makeElement from "../../utlils/makeElement"



const button = function (title = "uiButton"){

    const template = ` <button class="button">${title}</button>`

    const element = makeElement(template)

    console.log(element.nodeType)



    return makeElement(template)

}



export default button