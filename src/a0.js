import $ from 'jquery';
console.log('I am a0.js');
window.$ = $;

const body = document.querySelector('body');

// // A0.1 - sklonuj div A 10 razy i ustaw go za C
window.a01 = () => {
    const divA = document.querySelector('div');
    const body = document.querySelector('body');
    for (let i = 0; i < 10; i++) {
        body.appendChild(divA.cloneNode(true));
    }
};

window.$a01 = () => {
    const body = $('body')
    const divA = $('body > div').first();
    for (let i = 0; i < 10; i++) {
        body.append(divA.clone());
    }
};

// // A0.2 - zastąp div B i C na div A

window.a02 = () => {
    const body = document.querySelector('body');
    const divA = body.firstElementChild;
    // usuwamy stare div B i C
    body.removeChild(divA.nextElementSibling);
    body.removeChild(divA.nextElementSibling);
    // wstawiamy klony diva A
    body.appendChild(divA.cloneNode(true));
    body.appendChild(divA.cloneNode(true));
};

window.$a02 = () => {
    const body = $('body');
    const divA = $('body > div').first();
    divA.siblings().remove();
    body.append(divA.clone());
    body.append(divA.clone());
};


// // A0.3 - usuń akapity ze wszystkich div
window.a03 = () => {
    const divA = document.querySelector('div');
    const divB = document.querySelector('div').nextElementSibling;
    const divC = document.querySelector('div').nextElementSibling.nextElementSibling;
    divA.removeChild(divA.querySelector('p'));
    divB.removeChild(divB.querySelector('p'));
    divC.removeChild(divC.querySelector('p'));
};

// a03 = () => {
//     const divs = document.querySelectorAll('div');
//     const arr = Array.from(divs);
  
//     arr.forEach((div) => {
      // worst way:
      //const p = div.querySelector('p');
      //div.removeChild(p);
      // better way:
//       div.removeChild(div.lastElementChild);
//     })
//   }

window.$a03 = () => {
    $('p').remove();
};


// // A0.4 - przestaw miejscami tak zeby było C, B, A

window.a04 = () => {
    const divA = document.querySelector('div');
    // const divB = document.querySelector('div').nextElementSibling;
    const divC = document.querySelector('div').nextElementSibling.nextElementSibling;
    const body = document.querySelector('body');
    // body.insertBefore(divC, divA)
    // body.insertBefore(divB, divA)
    body.replaceChild(divC, divA);
    body.appendChild(divA);
};

window.$a04 = () => {
    
    const divA = $('body > div').first();
    const divB = $('div').get(1)
    const divC = $('div').get(2)
    
    $(divA).before(divC);
    $(divA).before(divB);
};
// // A0.5 - wstaw diva D na koniec

window.a05 = () => {
    const divA = document.querySelector('div');
    const divD = divA.cloneNode(true);
    const body = document.querySelector('body');
    divD.firstElementChild.innerText = 'D';
    divD.lastElementChild.innerText = 'I am div D';
    body.appendChild(divD);
};

window.$a05 = () => {
    const divC = $('div').get(2);
    const divD = $(divC).clone();
    $(divD).children('b').text('D');
    $(divD).children('p').text('I am div D');
    $(divC).after(divD);
};

// // A0.6 - wstaw diva Z przed A

window.a06 = () => {
    const divA = document.querySelector('div');
    const divZ = divA.cloneNode(true);
    const body = document.querySelector('body');
    divZ.firstElementChild.innerText = 'Z';
    divZ.lastElementChild.innerText = 'I am div Z';
    body.insertBefore(divZ, divA);
};

window.$a06 = () => {
    const divA = $('div').get(0);
    const divZ = $(divA).clone();
    $(divZ).children('b').text('Z');
    $(divZ).children('p').text('I am div Z');
    $(divA).before(divZ);
};
// // A0.7 - wstaw diva z napisem Brake pomiędzy A i B oraz B i C

window.a07 = () => {
    const divB = document.querySelectorAll('div')[1];
    const divC = document.querySelectorAll('div')[2];
    const divBreak = divB.cloneNode();
    divBreak.innerText = 'BREAK';
    const body = document.querySelector('body');
    // const divBreakTwo = divBreak.cloneNode(true);
    body.insertBefore(divBreak, divB);
    body.insertBefore(divBreak.cloneNode(true), divC);
};

window.$a07 = () => {
    const brake = $('<div>BREAK</div>');
    const divB = $('div').get(1);
    $(divB).before(brake);
    $(divB).after(brake.clone());
};
// // A0.8 - wstaw do srodka diva B liste <ul></ul>

window.a08 = () => {
    const divB = document.querySelectorAll('div')[1];
    const list = document.createElement('ul');
    list.innerHTML = '<li>lista</li>';
    divB.appendChild(list);
};

// window.a08 = () => {
//     const divB = document.querySelectorAll('div')[1];
//     divB.innerHTML = divB.innerHTML + '<ul><li>First element</li></ul>'
// }

window.$a08 = () => {
    const ul = $('<ul><li>jestem listą</li><ul>')
    const divB = $('div').get(1);
    $(divB).append(ul);
};
// // A0.9 - wstaw do diva C sklonowane divy A, B, C

window.a09 = () => {  
    const divC = document.querySelectorAll('div')[2];
    const clone = divC.cloneNode(true);
    divC.appendChild(divC.previousElementSibling.previousElementSibling.cloneNode(true));
    divC.appendChild(divC.previousElementSibling.cloneNode(true));
    divC.appendChild(clone);
};

window.$a09 = () => {
    const divA = $('body > div').first();
    const divB = $(divA).next();
    const divC = $(divB).next();
    const divCCLone = $(divC).clone();
    $(divC).append(divA.clone());
    $(divC).append(divB.clone());
    $(divC).append(divCCLone);
};