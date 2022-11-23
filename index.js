'use strict';

console.log("Please tell us what you're afraid of:");
console.log("Choose one of: heights, spiders, snakes, needles or insects");
const fearfulOf = prompt("");

let phobia;

// There's a lot of repetition in these lines of code
if (fearfulOf === "heights") {
  phobia = "acrophobia";
} else if (fearfulOf === "spiders") {
  phobia = "arachnophobia";
} else if (fearfulOf === "snakes") {
  phobia = "ophidiophobia";
} else if (fearfulOf === "needles") {
  phobia = "trypanophobia";
} else if (fearfulOf === "insects") {
  phobia = "entomophobia";
} else {
  phobia = "";
}

// If we use the switch statement it looks cleaner.
// switch (fearfulOf) {
//   case "heights":
//     phobia = "acrophobia";
//     break;
//   case "spiders":
//     phobia = "arachnophobia";
//     break;
//   case "snakes":
//     phobia = "ophidiophobia";
//     break
//   case "needles":
//     phobia = "trypanophobia";
//     break
//   case "insects":
//     phobia = "entomophobia";
//     break
//   default:
//     phobia = "";
// }

if (phobia !== "") {
  console.log(`Your fear of ${fearfulOf} is also known as "${phobia}".`);
} else {
  console.log("You're not scared of anything!");
}



