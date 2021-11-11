const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r1.question('What is your name? (Nicknames are acceptable)   ', (answer) => {
  console.log('Thank you');
  
  r1.question('What is an activity you like doing? ', (answer2) => {
    console.log(`Thank you for: ${answer2}`);

    r1.question('What do you listen to while doing that?', (answer3) => {
      console.log(`You like to listen to ${answer3}`);

        r1.question('Which is your favourite meal, dinner or lunch?', (answer4) => {
          console.log('thanks');

          r1.question('What is your favourite thinkg about that meal?', (answer5) => {
            console.log('That does sound delicious')

            r1.question('What sport is your absolute favourite? ', (answer6) => {
              console.log('That would be fun to watch');

              r1.question('What is your superpower?', (answer7) => {
                console.log('That does sound like a cool power to have.')

                console.log(`Thank you ${answer} for filling out this short survey.  Your favourite activity is ${answer2} and you like to listen to ${answer3}.  Your favourite meal is ${answer4} and you would like to eat ${answer5}.  Your favourite sport is ${answer6} and your superpower is ${answer7}`);
                r1.close();
              })
            })

          })

        })
    })
  
  });
 
});

