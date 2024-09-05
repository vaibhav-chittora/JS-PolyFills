const string = `<div>
<h1 class='head'>Hello</h1>
<p class='foo'>This is a paragraph</p>
<p class='foo'>This is another paragraph</p>
<p class='foo'>This is another paragraph</p>
</div>`

const domParser = new DOMParser()

const doc = domParser.parseFromString(string, 'text/html')

function customClassName(body, classname) {
    let nodesArray = []
    function recurse(element) {

        if (element === null) return;

        if (element.classList.contains(classname)) {
            nodesArray.push(element)
        }

        for (const child of element.children) {
            recurse(child)
        }
    }
    for (const bodyChild of body.children) {
        recurse(bodyChild)
    }
    return nodesArray;

}
