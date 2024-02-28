// 1 კალკულატორი
// function calculator() {
//   let num1 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი:"));
//   let num2 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი:"));

//   if (isNaN(num1) || isNaN(num2)) {
//       alert("შეყვანილი მონაცემები არ არიან ვალიდური. გთხოვთ, შემოიყვანოთ რიცხვები.");
//       return;
//   }

 
//   let operation = prompt("აირჩიეთ ოპერაცია: +, -, *, /");

  
//   if (!["+","-","*","/"].includes(operation)) {
//       alert("შეყვანილი ოპერაცია არ არის ვალიდური. გთხოვთ, აირჩიოთ +, -, *, /");
//       return;
//   }

//   let result;
//   switch (operation) {
//       case "+":
//           result = num1 + num2;
//           break;
//       case "-":
//           result = num1 - num2;
//           break;
//       case "*":
//           result = num1 * num2;
//           break;
//       case "/":
        
//           if (num2 === 0) {
//               alert("მეორე რიცხვი არ შეიძლება იყოს 0.");
//               return;
//           }
//           result = num1 / num2;
//           break;
//   }

//   alert(`შედეგი: ${result}`);
// }


// calculator();





// 2 - თამაში 1: გამოიცანით რიცხვი

// function guessNumberGame() {

//   const targetNumber = Math.floor(Math.random() * 100) + 1;

//   let userGuess = parseInt(prompt(" შემოიყვანეთ რიცხვი 1-დან 100-მდე:"));

//   while (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
//       alert("შემოიყვანეთ სწორი რიცხვი 1-დან 100-მდე.");
//       userGuess = parseInt(prompt("შემოიყვანეთ რიცხვი 1-დან 100-მდე:"));
//   }

//   let attempts = 1;

//   while (userGuess !== targetNumber) {
//       userGuess = parseInt(prompt("არასწორია, სცადეთ თავიდან. შემოიყვანეთ რიცხვი 1-დან 100-მდე:"));

    
//       while (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
//           alert("შემოიყვანეთ სწორი რიცხვი 1-დან 100-მდე.");
//           userGuess = parseInt(prompt("შემოიყვანეთ რიცხვი 1-დან 100-მდე:"));
//       }

     
//       attempts++;
//   }


//   alert(`გილოცავთ! თქვენ სწორად გამოიცანით რიცხვი ${attempts} ცდაზე.`);
// }


// guessNumberGame();






// 3 - თამაში 2: Hangman

// const words = ["ჯავასკრიპტი", "აიტი", "პროგრამირება", "კომპიუტერი", "დეველოპერი"];

// const randomWord = words[Math.floor(Math.random() * words.length)];
// let hiddenWord = Array.from(randomWord, () => "_");

// let remainingLetters = randomWord.length;

// function displayWord() {
//   console.log(hiddenWord.join(" "));
// }


// function guessLetter(letter) {
//   let found = false;
//   for (let i = 0; i < randomWord.length; i++) {
//     if (randomWord[i] === letter && hiddenWord[i] === "_") {
//       hiddenWord[i] = letter;
//       found = true;
//       remainingLetters--;
//     }
//   }
//   return found;
// }

// while (remainingLetters > 0) {
//   displayWord();
//   const userGuess = prompt("შეიყვანე ასო:");
  
//   if (!userGuess) {
//     break;
//   }
  
//   const isGuessCorrect = guessLetter(userGuess.toLowerCase());

//   if (!isGuessCorrect) {
//     console.log("ასო არ არის სწორი.");
//   }
// }

// displayWord();
// console.log("თამაში დასრულდა!");





// 4 - თარჯიმანი
// const translations = {
//   "ჯავასკრიპტი": "javascript",
//   "კომპიუტერი": "computer",
//   "ბრაუზერი": "browser",
 
// };

// function translateWord(word, dictionary) {
//   return dictionary[word] || "თარგმანი არ მოიძებნა";
// }

// function addWordToDictionary(word, translation, dictionary) {
//   dictionary[word] = translation;
// }

// function translateUserInput() {
//   const userInput = prompt("შეიყვანეთ სიტყვა :");
//   const translatedWord = translateWord(userInput, translations);
  
//   if (translatedWord === "თარგმანი არ მოიძებნა") {
//     const newTranslation = prompt("გთხოვთ მიუთითოთ თარგმანი:");
//     addWordToDictionary(userInput, newTranslation, translations);
//     console.log(`სიტყვა "${userInput}" დაემატა ლექსიკონში`);
//   } else {
//     console.log(`თარგმანი: ${translatedWord}`);
//   }
// }
// while (true) {
//   translateUserInput();
// }






// 5- ბანკომატი

// class BankomatApp {
//   constructor() {
//     this.users = [];
//   }
//  addUser(username, balance = 0) {
//     const user = {
//       username,
//       balance,
//     };
//     this.users.push(user);
//     console.log(`მომხმარებელი ${username}-ს დაემატა`);
//   }


//   checkBalance(username) {
//     const user = this.findUser(username);
//     if (user) {
//       console.log(`${username}-ის ბალანსი: ${user.balance}`);
//     } else {
//       console.log(`მომხმარებელი ${username}-ი არ მოიძებნა`);
//     }
//   }

 
//   deposit(username, amount) {
//     const user = this.findUser(username);
//     if (user) {
//       user.balance += amount;
//       console.log(`${amount}-ის შეტანა ${username}-ის ანგარიშზე. ბალანსი: ${user.balance}`);
//     } else {
//       console.log(`მომხმარებელი ${username}-ი არ მოიძებნა`);
//     }
//   }

//   withdraw(username, amount) {
//     const user = this.findUser(username);
//     if (user) {
//       if (user.balance >= amount) {
//         user.balance -= amount;
//         console.log(`${amount}-ის გატანა ${username}-ის ანგარიშიდან. ბალანსი: ${user.balance}`);
//       } else {
//         console.log(`ბალანსი არ არის საკმარისი ${amount}-ის თანხის გატანისთვის`);
//       }
//     } else {
//       console.log(`მომხმარებელი ${username}-ი არ მოიძებნა`);
//     }
//   }

//   findUser(username) {
//     return this.users.find(user => user.username === username);
//   }
// }

// const bankomatApp = new BankomatApp();

// bankomatApp.addUser("user1", 100);
// bankomatApp.addUser("user2", 50);

// bankomatApp.checkBalance("user1"); 
// bankomatApp.checkBalance("user3"); 

// bankomatApp.deposit("user1", 20); 

// bankomatApp.withdraw("user2", 30); 
// bankomatApp.withdraw("user1", 150); 
