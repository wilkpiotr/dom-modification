import $ from 'jquery';
console.log('I am a.js!');
window.$ = $;

const section = document.querySelector('section');
const links = document.querySelectorAll('a');
// A.1 - Wyświetl zamiast linku, zawartosc znacznika rel

window.a1 = () => {
    const links = document.querySelectorAll('a');
    const arr = Array.from(links);
    arr.forEach((el) => {
      el.innerText = el.getAttribute('rel');
    });
  }

window.$a1 = () => {
    $('a').each(function(i) {
        $(this).text($(this).attr('rel'))
    })
}


// A.2 - Dodaj na koniec link do Lubelskiej Akademii IT


window.addLAITLink = () => {
    const LAITLink = document.createElement('a');
    LAITLink.setAttribute('href', 'http://www.lait.pl');
    LAITLink.innerText = 'lait.pl';
    section.appendChild(LAITLink);
}
window.$a2 = () => {
    const link = $('<a href="http://www.lait.pl" target="blank">LAIT Link</a>')
    const section = $('section');
    section.append(link);
}

// A.3 - Ustaw zeby wszystkie linki kierowaly do Lubelskiej Akademii IT


window.allLinksLeadToLAIT = () => {    
    const allAArr = Array.from(links);
    allAArr.forEach((el) => {
        el.href = 'http://www.lait.pl';
        el.target = 'blank';
    })    
}

window.$a3 = () => {
    $('a').each(function(i) {
        $(this).attr('href', 'http://www.lait.pl')
    })
}
// A.4 - Wyswietl tylko oplacone linki

window.onlyPaid = () => {
    const unpaidLinks = document.querySelectorAll('a[data-paid="false"]')
    Array.from(unpaidLinks).forEach(el => {
            section.removeChild(el)
    })
}

window.$a4 = () => {
    $('a[data-paid=false]').remove()
}
// A.5 - Ustaw zeby link 6 był opłacony i powtórz poprzednie zadania A.4
window.a5 = () => {
    section.lastElementChild.dataset.paid = "true";
    const unpaidLinks = document.querySelectorAll('a[data-paid="false"]')
    Array.from(unpaidLinks).forEach(el => {
            section.removeChild(el)
    })
}

window.$a5 = () => {
    $('a:last').attr('data-paid','true');
    
}

// $('a[data-paid=false]').remove();