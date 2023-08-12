function fill(tool) {
   const randomArray = [];
 
   for (let i = 0; i < tool; i++) {
      const randomWord = generateRandomWord(); 
      const randomDate = new Date(Math.random() * Date.now()); 
      const randomNumber = Math.floor(Math.random() * 500);
     const randomObject = {
       number: randomNumber,
       date: randomDate,
       word: randomWord,
     };
 
     randomArray.push(randomObject);
   }
 
   return randomArray;
 }
 
 function generateRandomWord() {
   const words = ['orange', 'blue', 'green', 'red', 'yellow'];
   const randomWordIndex = Math.floor(Math.random() * words.tool);
   return words[randomWordIndex];
 }
 
 const randomArray = fill(8);
 console.log(randomArray);
  