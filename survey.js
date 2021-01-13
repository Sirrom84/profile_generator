const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What should I call you?:`, (answer) => {
  console.log(`Thanks, ${answer} it is!`);
  rl.question(`what's something you're into ${answer}?: `, (hobby) => {
    console.log(`That's awesome, I've never tried ${hobby} before. Also,if you ever want to leave for some reason just hit CTRL+C I'll be sad though`);
    rl.question(`What do you listen to while doing that?`, (listenTo) => {
      console.log(`I'll have to download ${listenTo} sometime.`);
      rl.question(`Random, but whats your favourite meal time? (eg: breakfast,lunch, etc.)`, (mealTime) => {
        console.log(`I agree, ${mealTime} is my favourite too.`);
        rl.question(`What's your favourite ${mealTime} food?`, (food) => {
            console.log(`I knew you were going to say ${food}!`);
          rl.question(`What's your favourite sport?`, (favSport) => {
            console.log(`Ok, ${favSport} it is. ☑️`);  
            rl.question(`What would someone that really knows you say you're good at?`, (goodAt) => {
              console.log(`Alright, I think that about sums it up. Thanks for answering my questions ${answer} see you next time`);
              rl.close(); 
            });
            
          });  
        });  
        
      });  
      
    });  
    
  });
  
  
}); 