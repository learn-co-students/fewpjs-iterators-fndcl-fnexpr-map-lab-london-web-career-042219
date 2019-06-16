const tutorials = [
  "what does the this keyword mean?",
  "What is the Contutorialuctor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?"
];

function titleCased() {
  return tutorials.map(tutorial => {
    tutorial = tutorial.split(" ");

    let final = [];

    for (let word of tutorial) {
      final.push(word.charAt(0).toUpperCase() + word.slice(1));
    }

    return final.join(" ");
  });
}

// function thisFunc(tutorial) {
//   tutorial = tutorial.toLowerCase().split(" ");

//   let final = [];

//   for (let word of tutorial) {
//     final.push(word.charAt(0).toUpperCase() + word.slice(1));
//   }

//   return final.join(" ");
//   //return tutorials;
// }

// function titleCased(tutorials) {
//   //debugger;
//   tutorials.map(thisFunc());
// }

// const activatedRobots = robots.map(function(robot) {
//   return Object.assign({}, robot, {
//     modes: robot.modes * 2,
//     isActivated: true
//   });
// });
