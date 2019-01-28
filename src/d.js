console.log('I am d.js!');

// D.1 - usun h1 ze strony
window.d1 = () => {
  document.querySelector('div').removeChild(document.querySelector('h1'))
};
d1();
// D.2 - utworz liste <ul></ul> zawierajaca nastepujaca tablice elementow:
const products = [
  {name: 'Milk', price: 3.00, available: 3},
  {name: 'Bread', price: 3.40, available: 5},
  {name: 'Chocolate', price: 4.00, available: 8},
  {name: 'Ham', price: 5.00, available: 0},
  {name: 'Fish', price: 10.00, available: 10},
  {name: 'Chicken', price: 12.00, available: 0}
];
// kazdy element ma posiadac nastepujaca strukture:
// <li>{name} with {price} PLN is available/unvailable</li>
// kazdy li ma posiadac w data atrybutach - data-price i data-available

window.d2 = () => {
  const ul = document.createElement('ul');
  ul.innerHTML = products.reduce((html, product) => {
    const availability = product.available > 0 ? 'available' : 'unavailable';
    return html + `<li data-price="${product.price}" data-available="${product.available}">${product.name} with ${product.price} PLN is ${availability}`
  }, '');
  document.querySelector('div').appendChild(ul);
};
d2();
// D.3 - stworz pod lista kolejna liste z napisem - towary dostepne
// wyswietl tylko dostepne towary
window.d3 = () => {
  const ul2 = document.createElement('ul');
  ul2.innerHTML = products.reduce((html, product) => {
    if (product.available > 0) {
      return html + `<li>${product.name}</li>`
    } else return html + '';
  },'Available Products:');
  document.querySelector('div').appendChild(ul2);
};
d3();

// D.4 - wyswietl produkt o najwiekszej cenie w nowo utworzonym divie o id = 'max-price'
window.d4 = () => {
  const newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'max-price');
  products.forEach((product) => {
  let max = 0;
  let mostCostlyProduct;
    if (parseInt(product.price) > max) {
      max = parseInt(product.price);
      mostCostlyProduct = product.name;
    } newDiv.innerText = `The most costly product is ${mostCostlyProduct} with price ${max}`;
  });
  document.body.appendChild(newDiv);
  document.body.insertBefore(newDiv, document.querySelector('script'));
};
d4();
// D.5 utworz tabele z kolumnami - Nazwa, Cena, Dostepnosc i wyswietl w niej produkty

window.d5 = () => {
  const table = document.createElement('table');
  table.innerHTML = products.reduce((html, product) => {
    const availability = product.available > 0 ? 'available' : 'unavailable';
    return html + `<tr><td>${product.name}</td><td>${product.price}</td><td>${availability}</td>`
  },'')
  document.body.appendChild(table);
  document.body.insertBefore(table, document.querySelector('script'))
};
d5();

