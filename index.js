const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const filename = "axiosData.js";


inquirer
  .prompt([
  {
    type: "input",
    message: "Enter your GitHub username",
    name: "username",
  },
  {
    type: "list",
    message: "What color scheme would you want?",
    name: "color",
    choices: ["red", "green", "blue", "pink"]
  }
  ]).then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

  axios
    .get(queryUrl)
    .then(function(response) {
      // console.log(response.data);
      fs.writeFile(filename, JSON.stringify(response.data), function(err){
        if (err) return console.log(err);
      });


    });
  });






// const questions = [
  
// ];

// function writeToFile(fileName, data) {
 
// }

// function init() {

// init();


