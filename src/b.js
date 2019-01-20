import $ from 'jquery';
console.log('I am b.js!');
window.$ = $;

// B.1 - Wyświetl na stronie sumę goli strzelonych przez graczy
// window.b1 = () => {
//     const goals = document.querySelectorAll('tr > td:last-child');
//     let sum = 0;
//     goals.forEach(el => {
//         sum += parseInt(el.innerText);
//     })
//     document.querySelector('div').innerText = `all goals = `+ sum;
// }

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
    // let count = 0;
    // goals.forEach((goalNumber) => {
    //   count += parseInt(goalNumber.innerText);
    // });
    const arr = Array.from(goals);
    const count = arr.reduce((result, goal) => {
      return result += parseInt(goal.innerText);
    }, 0);
    document.querySelector('#goals-count').innerText = 'Sum of goals = ' + count;
};

// B.2 - Zaznacz gracza z największą ilością goli ustawiając tło na zielone

window.b2 = () => {
    const goals = document.querySelectorAll('tr > td:last-child');
    let max = 0;
    let bestPlayer;
    goals.forEach(playersGoals => {
        if (parseInt(playersGoals.innerText) > max) {
            max = parseInt(playersGoals.innerText);
            bestPlayer = playersGoals;
        }
    });
    bestPlayer.parentElement.style.backgroundColor = 'green';
}

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
};

// B.3 - Zaznacz gracza z najmniejszą ilością goli ustawiając tło na czerwone

window.b3 = () => {
    const goals = document.querySelectorAll('tr > td:last-child');
    let min = Number.MAX_SAFE_INTEGER;
    let worstPlayer;
    goals.forEach(playersGoals => {
        if (parseInt(playersGoals.innerText) < min) {
            min = parseInt(playersGoals.innerText);
            worstPlayer = playersGoals;
        }
    });
    worstPlayer.parentElement.style.backgroundColor = 'red';
};

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
};

// B.4 - Posortuj i wyświetl graczy po id

window.b4 = () => {
    const players = Array.from(document.querySelectorAll('tbody > tr'));
    const sortedPlayers = players.sort((playerA, playerB) => {
        return parseInt(playerA.dataset.id) - parseInt(playerB.dataset.id);
        }
    )
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    sortedPlayers.forEach(player => {
        tbody.appendChild(player);
    })
};

// window.$b4 = () => {
//     const players = $('tbody > tr');
//     $(players).each(function() {
//         if (parseInt($(this).data('id')) > parseInt($(this).next().data('id'))) {
//             $(this).before($(this).next())
//         // } else {
//         //     $(this).next().after($(this))
//         }
        
//     });
// };

// B.5 - Posortuj i wyświetl graczy po cenie z data-atrybutu

window.b5 = () => {
    const players = Array.from(document.querySelectorAll('tbody > tr'));
    const sortedPlayers = players.sort((playerA, playerB) => {
        return parseInt(playerB.dataset.price) - parseInt(playerA.dataset.price);
        }
    )
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    sortedPlayers.forEach(player => {
        tbody.appendChild(player);
    })
};

// B.6 - Usuń graczy z ceną wyższą nić 60 m USD

window.b6 = () => {
    const players = Array.from(document.querySelectorAll('tbody > tr'));
    const tbody = document.querySelector('tbody');
    players.forEach(player => {
        if (parseInt(player.dataset.price) > 60) {
            tbody.removeChild(player);
        }
    })
};

// B.7 - Dodaj kolumnę zawierającą cenę gracza

window.b7 = () => {
    const players = Array.from(document.querySelectorAll('tbody > tr'));
    players.forEach(player => {
        const price = document.createElement('td');
        price.innerText = player.dataset.price;
        console.log(player.dataset.price)
        player.appendChild(price)
        }
    )
    const title = document.createElement('th');
    title.innerText = 'price';
    document.querySelector('thead > tr').appendChild(title)
};

// B.8 - Zostaw tylko graczy z PSG na liście

window.b8 = () => {
    const players = Array.from(document.querySelectorAll('tbody > tr'));
    const tbody = document.querySelector('tbody');
    players.forEach(player => {
        if (player.children[2].innerText !== 'PSG') {
            tbody.removeChild(player);
        }
    })
};

// B.9 - Dodaj do nazwy klubu ikonkę klubu

window.b9 = () => {
    const players = Array.from(document.querySelectorAll('tbody > tr'));
    const icons = {
        barcelona: 'http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/16/FC-Barcelona-icon.png',
        real: 'http://icons.iconarchive.com/icons/giannis-zographos/spanish-football-club/16/Real-Madrid-icon.png',
        psg: 'http://icons.iconarchive.com/icons/giannis-zographos/french-football-club/16/Paris-Saint-Germain-icon.png'
    };
    players.forEach(player => {
        const td = player.children[2];
        const team = td.innerText.toLowerCase();
        const img = document.createElement('img');
        img.setAttribute('src', icons[team] || icons.barcelona )
        td.appendChild(img)
    })
};

// B.10 - wyświetl na stronie nazwę najlepszego gracza

window.b10 = () => {
    let bestPlayer;
    let sum = 0;
    const players = Array.from(document.querySelectorAll('tbody > tr'));
    players.forEach(player => {
        if (player.lastElementChild.innerText > sum) {
            sum = player.lastElementChild.innerText;
            bestPlayer = player
        }
        document.querySelector('#goals-count').innerText = 'The best player is ' + bestPlayer.children[1].innerText
    })
};

// B.11 - wyświetl na stronie nazwę gracza najdroższego

window.b11 = () => {
    let mostExpensivePlayer;
    let highestPrice = 0;
    const players = Array.from(document.querySelectorAll('tbody > tr'));
    players.forEach(player => {
        if (parseInt(player.dataset.price) > highestPrice) {
            highestPrice = parseInt(player.dataset.price);
            mostExpensivePlayer = player;
        }
        document.querySelector('#goals-count').innerText = 'The most expensive player is ' + mostExpensivePlayer.children[1].innerText;
    })
};

// B.12 - wyświetl na stronie gracza z najlepszym stosunkiem ceny do strzelonych bramek

window.b12 = () => {
    let bestPlayer;
    let sum = Number.MAX_SAFE_INTEGER;
    const players = Array.from(document.querySelectorAll('tbody > tr'));
    players.forEach(player => {
        const ratio = (parseInt(player.dataset.price) / player.lastElementChild.innerText);
        if (ratio < sum) {
            sum = ratio;
            bestPlayer = player;
        }
        document.querySelector('#goals-count').innerText = 'The best player is ' + bestPlayer.children[1].innerText;
    })
};