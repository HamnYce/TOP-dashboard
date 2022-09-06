let x = document.getElementsByClassName('project-card');
let card = x.item(0);

let roo = document.getElementsByClassName('project-cards-container');
let container = roo.item(0);

for (let i = 0; i < 8; i++) {
  container.appendChild(card.cloneNode(true));
}