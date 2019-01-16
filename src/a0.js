import $ from 'jquery';
console.log('I am a0.js');
window.$ = $;

// // A0.1 - sklonuj div A 10 razy i ustaw go za C
// a01 = () => {
//     const divA = document.querySelector('div');
//     const body = document.querySelector('body');
//     for (let i = 0; i < 10; i++) {
//         body.appendChild(divA.cloneNode(true));
//     }
// }

window.$a01 = () => {
    const body = $('body')
    const divA = $('body > div').first();
    for (let i = 0; i < 10; i++) {
        body.append(divA.clone());
    }
}


// // A0.2 - zastąp div B i C na div A
// window.a02 = () => {
//     const body = document.querySelector('body');
//     const divA = document.querySelector('div');
//     const divB = divA.nextElementSibling;
//     const divC = divB.nextElementSibling;
//     body.replaceChild(divA, divB);
//     body.replaceChild(divA, divC);
// }

window.a02 = () => {
    const body = document.querySelector('body');
    const divA = body.firstElementChild;
    // usuwamy stare div B i C
    body.removeChild(divA.nextElementSibling);
    body.removeChild(divA.nextElementSibling);
    // wstawiamy klony diva A
    body.appendChild(divA.cloneNode(true));
    body.appendChild(divA.cloneNode(true));
  }
window.$a02 = () => {
    const body = $('body');
    const divA = $('body > div').first();
    divA.siblings().remove();
    body.append(divA.clone());
    body.append(divA.clone());
}


// // A0.3 - usuń akapity ze wszystkich div
// a03 = () => {
//     const divA = document.querySelector('div');
//     const divB = document.querySelector('div').nextElementSibling;
//     const divC = document.querySelector('div').nextElementSibling.nextElementSibling;
//     divA.removeChild(divA.querySelector('p'));
//     divB.removeChild(divB.querySelector('p'));
//     divC.removeChild(divC.querySelector('p'));
// }

window.$a03 = () => {
    $('p').remove();
}

// // A0.4 - przestaw miejscami tak zeby było C, B, A

window.$a04 = () => {
    
    const divA = $('body > div').first();
    const divB = $('div').get(1)
    const divC = $('div').get(2)
    
    $(divA).before(divC);
    $(divA).before(divB);
}
// // A0.5 - wstaw diva D na koniec

window.$a05 = () => {
    const divC = $('div').get(2);
    const divD = $(divC).clone();
    $(divD).children('b').text('D');
    $(divD).children('p').text('I am div D');
    $(divC).after(divD);
}

// // A0.6 - wstaw diva Z przed A
window.$a06 = () => {
    const divA = $('div').get(0);
    const divZ = $(divA).clone();
    $(divZ).children('b').text('Z');
    $(divZ).children('p').text('I am div Z');
    $(divA).before(divZ);
}
// // A0.7 - wstaw diva z napisem Brake pomiędzy A i B oraz B i C

window.$a07 = () => {
    const brake = $('<div>BREAK</div>');
    const divB = $('div').get(1);
    $(divB).before(brake);
    $(divB).after(brake.clone());
}
// // A0.8 - wstaw do srodka diva B liste <ul></ul>
window.$a08 = () => {
    const ul = $('<ul><li>jestem listą</li><ul>')
    const divB = $('div').get(1);
    $(divB).append(ul);
}
// // A0.9 - wstaw do diva C sklonowane divy A, B, C

window.$a09 = () => {
    const divA = $('body > div').first();
    const divB = $(divA).next();
    const divC = $(divB).next();
    const divCCLone = $(divC).clone();
    $(divC).append(divA.clone());
    $(divC).append(divB.clone());
    $(divC).append(divCCLone);
}