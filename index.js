const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML.js")
const baseURL = "https://api.github.com/users/";

let profile = {};

  
init();

async function init() {
  try {
    await getUser();
    console.log(generateHTML.generateHTML(profile));
  } catch (error) {
    console.log(error)
  }
}

async function getUser() {
  try {
    const {username, color} = await inquirer.prompt([
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
    ]);
      const { data } = await axios.get(`${baseURL}${username}?per_page=100`);
      const { data: starData } = await axios.get(`${baseURL}${username}/starred`);

      let {avatar_url: image, login, location, html_url: github, blog, bio, followers, following} = data;
      profile = {
        image,
        username,
        location,
        github,
        blog,
        bio,
        followers,
        following,
        color,
        locationURL: "https://goo.gl/maps/xS54udcr7Q3ZvtF98", // Set up the api
      };
      profile.stars = starData.length;    
      
  } catch (err) {
    console.log(err);
  }
}
  

  
  
  
  // const questions = [
  
// ];

// function writeToFile(fileName, data) {
 
// }

// function init() {

// init();


