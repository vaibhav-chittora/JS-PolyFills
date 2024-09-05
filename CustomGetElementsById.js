const str = `<div>
                <h1 class='head'>Hello</h1>
                <div class='div'>This is a div</div>
                <p id='foo1' class='para'>This is a 1st paragraph</p>
                <p id='foo2' class='para'>This is 2nd paragraph</p>
                <p id='foo3' class='para'>This is 3rd paragraph</p>
            </div>`;


// create a DOM object from the string
const domParser = new DOMParser();
// parse the string and gives us the document object
const doc = domParser.parseFromString(str, 'text/html');

// get the body element from the document object
// Custom GetElementById function
function customGetElementById(body, id) {

    function recurse(element) {
        //traverse the DOM tree recursively
        if (element === null) return;

        //if id matches then return the element
        if (element.id === id) {
            return element
        }
        // for children 
        for (const child of element.children) {
            const result = recurse(child)
            if (result) return result

        }

        return null
    }
    return recurse(body)

}
