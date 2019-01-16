import $ from 'jquery';
console.log('I am b.js!');
window.$ = $;

// B.1 - Wyświetl na stronie sumę goli strzelonych przez graczy
window.$b1 = () => {
    const goals = $('tr > td:last-of-type');
    let count = 0;
    $(goals).each(function(goalNumber) {
        count += parseInt($(this).text());
        
    });
    $('#goals-count').text('sum of goals = ' + count);
}

window.b1 = () => {
    const goals = document.querySelectorAll('tr > td:last-child');
    let count = 0;
    goals.forEach((goalNumber) => {
      count += parseInt(goalNumber.innerText);
    });
    // const arr = Array.from(goals);
    // const count = arr.reduce((result, goal) => {
    //   return result += parseInt(goal.innerText);
    // }, 0);
  
    document.querySelector('#goals-count').innerText = 'Sum of goals = ' + count;
  }

// B.2 - Zaznacz gracza z największą ilością goli ustawiając tło na zielone

window.$b2 =  () => {
    const players = $('tr');
    let max = 0;
    let bestPlayer = players[0];
    $(players).each(function(i) {
        const goalsNumber = parseInt($(this).children('td:last').text());
        
        if (goalsNumber > max) {
            max = goalsNumber;
            bestPlayer = $(this);
        }
    });
    $(bestPlayer).css('background-color','green');
}
// B.3 - Zaznacz gracza z najmniejszą ilością goli ustawiając tło na czerwone
window.$b3 =  () => {
    const players = $('tr');
    let min = Number.MAX_SAFE_INTEGER;
    let worstPlayer = players[0];
    $(players).each(function(i) {
        const goalsNumber = parseInt($(this).children('td:last').text());
        
        if (goalsNumber < min) {
            min = goalsNumber;
            worstPlayer = $(this);
        }
    });
    $(worstPlayer).css('background-color','red');
}

// B.4 - Posortuj i wyświetl graczy po id
window.$b4 = () => {
    const players = $('tbody > tr');
    $(players).each(function() {
        if (parseInt($(this).data('id')) > parseInt($(this).next().data('id'))) {
            $(this).before($(this).next())
        // } else {
        //     $(this).next().after($(this))
        }
        
    });
}

// B.5 - Posortuj i wyświetl graczy po cenie z data-atrybutu
// B.6 - Usuń graczy z ceną wyższą nić 60 m USD
// B.7 - Dodaj kolumnę zawierającą cenę gracza
// B.8 - Zostaw tylko graczy z PSG na liście
// B.9 - Dodaj do nazwy klubu ikonkę klubu
// B.10 - wyświetl na stronie nazwę najlepszego gracza
// B.11 - wyświetl na stronie nazwę gracza najdroższego
// B.12 - wyświetl na stronie gracza z najlepszym stosunkiem ceny do strzelonych bramek