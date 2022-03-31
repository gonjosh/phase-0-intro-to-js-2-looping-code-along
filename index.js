// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
   // console.log(`I'm ${age} years old. Haappy birthday to me!`);

//}
//const gifts = ["teddy bear", "drone", "doll"];
//function wrapGifts(gifts) {
    //for (let i = 0; i < gifts.length; i++) {
    //    console.log(`Wrapped ${gifts[i]} and added a bow!`)
   // }

//return gifts;
   // }
  //  wrapGifts(gifts);




const cards = ['Guadalupe', 'Ollie', 'Aki'] ;

function writeCards(cards) {
    let newCards = [];
    for ( let i = 0; i < cards.length; i++ ) {
        newCards.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
    return newCards;
}
writeCards(cards);

function countDown(){
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}
countDown();



// "Thank you, Guadalupe, for the wonderful surprise gift!"
// "Thank you, Ollie, for the wonderful surprise gift!"
// "Thank you, Aki, for the wonderful surprise gift!"