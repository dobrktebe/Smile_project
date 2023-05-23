import { emoji } from "./emoji.js";
console.log(emoji);

let a = document.querySelector(".main_kartochki");

console.log(a);

function printCards(cards) {
  cards.forEach((card) => {
    printCard(card);
  });
}
printCards(emoji);

function printCard(card) {
  let parent = document.createElement("div"); // <div></div>
  parent.classList.add("kartochka"); // <div class="kartochka"> </div>

  let divTitle = document.createElement("b"); // <b></b>
  divTitle.innerText = card.title; // <b>100</b>
  divTitle.classList.add("kartochka_sotny"); // <b lass="kartochka_sotny">100</b>

  let divSymbol = document.createElement("p");
  divSymbol.innerText = card.symbol;
  divSymbol.classList.add("img");

  let divKeywords = document.createElement("p");
  divKeywords.innerText = card.keywords;
   divKeywords.classList.add("kartochka_text");
  

  parent.append(divSymbol); // <div class="kartochka">  !!!!!!  </div>
  parent.append(divTitle);  // <b class="100"
  parent.append(divKeywords); // <div class="keywords>"
  a.append(parent);
}

// function deleteRepeats(obj) {
//     let arrey = obj.keywords.split(" ");
//     let set1 = new Set(arrey)
//     console.log(set1)
//     let arr = Array.from(set1)
//     let new = arr.join(" ")
// console.log(new)
// }

deleteRepeats({
  title: "100",
  symbol: "💯",
  keywords:
    "hundred points symbol symbol wow wow win win perfect perfect parties parties",
});
