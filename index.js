const prompt = require('prompt-sync')();

function greet(namePassedIn,datePassedIn) {
  const days = checkDay(datePassedIn);
  return { 
    welcome:'Welcome to SALT, ' + namePassedIn,
    days:days
  };
}

// Calculate how many days left/after the course
function checkDay(date) {
  const today = new Date();
  const course = new Date(date);
  let difference = Math.ceil((course - today) / (1000 * 3600 * 24));
  if ( difference === 0){
    return 'The course starts Today'
  } else if(difference > 0){
    return 'Today it is '+ difference +' days left until the course starts';
  } else {
    return 'Today it is '+ Math.abs(difference) +' days left after the course starts';
  };
}

// Main program
const name = prompt('What is your name? ');
const dateStartCourse = prompt('When does that course start? ');
const greeting = greet(name, dateStartCourse);
console.log(greeting.welcome);
console.log(greeting.days);

module.exports.greet = greet;