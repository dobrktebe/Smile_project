import { emoji } from "./emoji.js";
console.log(emoji);

let a = document.querySelector(".main_kartochki");
console.log(a);

 printCards = (cards) => {
  cards.forEach((card) => {
    ///printCard(card);
    console.log();
  });
}
printCards(emoji);

printCard = (card) => {
  let div = document.createElement("div");
  div.innerText = "smile";
  div.setAttribute("class", "kartochka");
  // a.prepend(div)

  let img = document.createElement("p");
  img.innerText = "card.symbol";
  img.setAttribute("class", "img");

  let sotny = document.createElement("p");
  sotny.innerText = "100";
  sotny.setAttribute("class", "kartochka_sotny");

  let text = document.createElement("p");
  text.innerText = "Hundred, points, symbol, wow, win, perfect, parties";
  text.setAttribute("class", "kartochka_text");
  div.append(img);
  div.append(sotny);
  div.append(text);
  a.prepend(div);
};
allcards = (emoji)=> {
  emoji.forEach((card) => printCard(card));
}
allcards(emoji);
