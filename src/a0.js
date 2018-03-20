console.log('I am a0.js');

// A0.1 - sklonuj div A 10 razy i ustaw go za C
a01 = () => {
    const divA = document.querySelector('div');
    const body = document.querySelector('body');
    for (let i = 0; i < 10; i++) {
        body.appendChild(divA.cloneNode(true));
    }
}


// A0.2 - zastąp div B i C na div A
a02 = () => {
    const body = document.querySelector('body');
    const divA = document.querySelector('div');
    const divB = divB.nextElementSibling;
    const divC = divC.nextElementSibling;
    body.replaceChild(divA, divB);
    body.replaceChild(divA, divC);
}

// A0.3 - usuń akapity ze wszystkich div
a03 = () => {
    const divA = document.querySelector('div');
    const divB = document.querySelector('div').nextElementSibling;
    const divC = document.querySelector('div').nextElementSibling.nextElementSibling;
    divA.removeChild(divA.querySelector('p'));
    divB.removeChild(divB.querySelector('p'));
    divC.removeChild(divC.querySelector('p'));
}

// A0.4 - przestaw miejscami tak zeby było C, B, A
// A0.5 - wstaw diva D na koniec
// A0.6 - wstaw diva Z przed A
// A0.7 - wstaw diva z napisem Brake pomiędzy A i B oraz B i C
// A0.8 - wstaw do srodka diva B liste <ul></ul>
// A0.9 - wstaw do diva C sklonowane divy A, B, C