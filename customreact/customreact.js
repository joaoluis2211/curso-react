function renderElement(reactElement, container) {
    const element = document.createElement(reactElement.type)
    element.innerHTML = reactElement.childen
    for (const attribute in reactElement.attributes) {
        element.setAttribute(attribute, reactElement.attributes[attribute])
    }
    container.appendChild(element)
}
const reactElement = {
    type: 'a',
    attributes: {
        href: 'https://google.com',
        target: '_blank'
    },
    childen: 'Visitar o google'
}

const domElement = document.getElementById('root')

renderElement(reactElement, domElement)