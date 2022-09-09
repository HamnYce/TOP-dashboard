let x = document.getElementsByClassName('project-card');
let card = x.item(0);

let roo = document.getElementsByClassName('project-cards-container');
let container = roo.item(0);

for (let i = 0; i < 8; i++) {
  container.appendChild(card.cloneNode(true));
}

let y = document.getElementsByClassName('account-card');
card = y.item(0);

let foo = document.getElementsByClassName('trending-cards-container');
container = foo.item(0);

for (let i = 0; i < 3; i++) {
  let new_card = card.cloneNode(true);
  let img = new_card.getElementsByClassName('account-image').item(0);
  img.style.backgroundImage = `url(assets/profile-pics/profile-${i + 1}.jpeg)`

  container.appendChild(new_card);
}

let card_parts = document.getElementsByClassName('card-part');

let arr = [...card_parts]


arr.forEach(element => {
  let s = element.getElementsByTagName('p').item(0).innerHTML;
  // TODO: string array indexing how?
  element.getElementsByTagName('p').item(0).innerHTML = s.slice(0, 120) + '...';
});
