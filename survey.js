const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!",
];

let answers = [];

const startNextQuestion = () => {
  rl.question(questions.shift(), (answer) => {
    answers.push(answer);
    if (questions.length === 0) {
      rl.close();
    } else {
      //recursion
      startNextQuestion();
    }
  });
};
startNextQuestion();

rl.on("close", () => {
  answers = {
    name: answers[0],
    activity: answers[1],
    music: answers[2],
    favoriteMealTime: answers[3],
    favoriteFood: answers[4],
    sport: answers[5],
    superPower: answers[6],
  };

  let profileGenerator = `
  ${answers.name} likes to ${answers.activity}.  
  While doing that activity he likes to listen to ${answers.music}
   When it comes to meal time, his favourite is ${answers.favoriteMealTime}. 
    His favorite food during that meal time is ${answers.favoriteFood}. 
     His favorite sport is ${answers.sport}.  Lastly, his supower power is ${answers.superPower}`;
  console.log(profileGenerator);
});
