const cowsay = require ("cowsay")
const information = require("./information");
const myText = `Hi, I am ${information.name} from ${information.campus}`;
console.log(cowsay.say({text: myText}));