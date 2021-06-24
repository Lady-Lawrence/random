// pseudo-code
// goal: clicks a button AMD generates a new div with new color

// 1. get the the button
let btnGen = document.querySelector('#btn-generate')
let btnGenTwo = document.querySelector('#btn-generate-two')

// 2. be able to click the button
// 3. After button click, generate div
btnGen.addEventListener('click', function(){
    console.log('I click a button....');

    let div = document.createElement('div');
    div.innerHTML = '<h3 class="text-9xl bg-blue-400 p-3">My Big, Big H3</h3>';

    document.body.appendChild(div);
})

btnGenTwo.addEventListener('click', () => {

    let divTwo = document.createElement('div');
    divTwo.innerHTML = '<h3 class="text-9xl bg-green-400 p-3">My Second H3</h3>';

    document.body.appendChild(divTwo);

})

// console.log(btnGen);
//
//
// // build dynamic H2
// let h2 = document.createElement('h2'); // fn
// h2.innerText = 'Some H2 Content'; // properties
//
// // build div




// div.innerText = 'My String';

// CMD + ,
// Alt + Ctl + S


// my appends
document.body.appendChild(h2);

//
// console.log('new H2: ', h2);
