console.log('I am c.js!');

// C.1 - posortuj elementy po pupularności (największa na 1 miejscu)
window.c1 = () => {
    const sportsDiscipline = Array.from(document.querySelectorAll('li'));
    const sortedSports = sportsDiscipline.sort((sportA, sportB) => {
        return sportB.dataset.popularity - sportA.dataset.popularity
    })
    const list = document.querySelector('ul');
    list.innerHTML = '';
    sortedSports.forEach(sport => {
        list.appendChild(sport)
    })
};

// C.2 - dodaj do nazwy sportu suffix (team) dla sportu druzynowego i (single) dla reszty

window.c2 = () => {
    const sportsDiscipline = Array.from(document.querySelectorAll('li'));
    sportsDiscipline.forEach(sport => {
        if (sport.dataset.teamSport === 'true') {
            sport.innerText = sport.innerText + ' team';
        } else
        sport.innerText = sport.innerText + ' single';
    })
};
// C.3 - pozostaw na ekranie tylko sporty druzynowe

window.c2 = () => {
    const sportsDiscipline = Array.from(document.querySelectorAll('li'));
    const list = document.querySelector('ul');
    sportsDiscipline.forEach(sport => {
        if (sport.dataset.teamSport === 'false') {
            list.removeChild(sport);
        }
    });
};

// C.4 - zamiast jednej listy zrob dwie z podzialem na typ sportu - jedna lista druzynowy druga indywidualne

window.c4 = () => {
    const sportsDiscipline = Array.from(document.querySelectorAll('li'));
    const list = document.querySelector('ul');
    const secondList = document.createElement('ul');
    sportsDiscipline.forEach(sport => {
        if (sport.dataset.teamSport !== 'true') {
            list.removeChild(sport);
            secondList.appendChild(sport);
        }
    });
    document.body.appendChild(secondList)
};

// C.5 - stwórz tabelkę zawierającą te same dane
// C.6 - dodaj do tabelki z C5 kolumnę z informacją team lub single

window.c56 = () => {
    const list = document.querySelector('ul');
    const sportsDiscipline = Array.from(document.querySelectorAll('li'));
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    sportsDiscipline.forEach(sport => {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td data-team-sport='${sport.dataset.teamSport}' data-popularity='${sport.dataset.popularity}' >${sport.innerText}</td>
        <td>${sport.dataset.teamSport === 'true' ? 'team' : 'single'}</td>`;
        tbody.appendChild(tr)
    })
    table.appendChild(tbody);
    document.body.replaceChild(table, list)
};

// C.7 - Wyświetl ile jest sportów, ile sportów drużynowych i ile indywidualnych

c7 = () => {
    const sportsDiscipline = document.querySelectorAll('li');
    const teamSports = document.querySelectorAll('li[data-team-sport="true"]')
    const singleSports = document.querySelectorAll('li[data-team-sport="false"]')
    console.log(sportsDiscipline.length + ' + ' + teamSports.length + ' + ' + singleSports.length)
}
c7()