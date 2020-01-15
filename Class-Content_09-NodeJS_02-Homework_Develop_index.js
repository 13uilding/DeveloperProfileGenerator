const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");


inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

  axios
    .get(queryUrl)
    .then(function(respond) {
      // console.log(respond.data);
      const repoArr = respond.data.map(function(repo){
        return repo.name;
      })
      console.log(repoArr);
    });
  });

const questions = [
  
];

function writeToFile(fileName, data) {
 
}

function init() {

init();


