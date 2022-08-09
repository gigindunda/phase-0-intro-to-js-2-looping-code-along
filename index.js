// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
  }
  const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      debugger;
    }
  
    return gifts;
  }
  
const cards = ["Ada", "Brendan", "Ali"];

function writeCards(cards) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < cards.length) {
    console.log(`Thank you, ${cards[i]}, for the wonderful birthday gift!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return cards;
}

writeCards(cards);

for (var x=11-1;x >= 0;x--) console.log(x);