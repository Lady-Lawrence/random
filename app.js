// pseudo-code
// goal: clicks a button AND generates a new div with new color

// 1. get the the button
const btnGen = document.querySelector('#btn-generate');

// 2. be able to click the button
// 3. After button click, generate div
btnGen.addEventListener('click', function () {

    // collectInput()
    // checkInput()
    // createDiv()

    collectInput(); //string

    //@TODO: Refactor this block to simplify this EventListner
    const userTailwindColor = window.prompt('What TW Color?'); //string
    const userContent = window.prompt('What Text?'); // string

    // 1. check that the input is valid
    // 2. if it's not valid, give feedback

    checkInput(); //true
    // 3. if not OK stop
    // return ;

    // 4. if OK
    createNewDiv(userTailwindColor, userContent);

});

function collectInput(){
    //@TODO: collect user input
}

function checkInput() {
    // @TODO: check if input is valid
    return true;
}

// [D]ry [R]epeat [Y]ourself
function createNewDiv(tailwindBgColor, content) {
    const div = document.createElement('div');
    div.innerHTML = `<h3 class="text-9xl ${tailwindBgColor} p-3">${content}</h3>`; // string interpolation

    document.body.appendChild(div);

    window.alert('Your div was created');
}







