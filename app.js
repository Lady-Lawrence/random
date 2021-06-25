// pseudo-code
// goal: clicks a button AND generates a new div with new color

// 1. get the the button
const btnGen = document.querySelector('#btn-generate');
const btnGenTwo = document.querySelector('#btn-generate-two');

// 2. be able to click the button
// 3. After button click, generate div
btnGen.addEventListener('click', function () {
    createNewDiv('bg-blue-400', 'My Big, Big H3');
});

btnGenTwo.addEventListener('click', () => {
    createNewDiv('bg-gray-300', 'My New New');
});

// [D]ry [R]epeat [Y]ourself
function createNewDiv(tailwindBgColor, content) {
    const div = document.createElement('div');
    div.innerHTML = `<h3 class="text-9xl ${tailwindBgColor} p-3">${content}</h3>`; // string interpolation

    document.body.appendChild(div);

}

// console.log(btnGen); // my string



