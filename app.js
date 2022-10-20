const fs = require ("fs");
const { dirname } = require("path");
const moment = require ("moment");

const superHerois = require("./superHerois");

let dados = fs.readFileSync(__dirname + '/dados.txt','utf8');
let data = moment().format("YYYY-MM-DD");

console.log(superHerois);