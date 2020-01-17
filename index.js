const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const pdf = require("html-pdf");
const generateHTML = require("./generateHTML.js")
const baseURL = "https://api.github.com/users/";


let profile = {};
const colors = generateHTML.colors;
const fileHTML = "test.html";
const filePDF = "test.pdf";

  
init();

async function init() {
  await getUser();
    try {
    fs.writeFile(fileHTML, generateHTML.generateHTML(profile), err => {
      if (err) throw err;
      generatePDF(fileHTML, filePDF);
    });
    
  } catch (error) {
    console.log(error)
  }
}

function generatePDF(fileHTML, filePDF) {
  var html = fs.readFileSync(fileHTML, 'utf8');
  // var options = { format: 'Letter' };
  
  pdf.create(html).toFile(filePDF, function(err, res) {
    if (err) return console.log(err);
    console.log(res);
  });
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
      let {avatar_url: image, login, location, html_url: github, blog, bio, followers, following, public_repos} = data;
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
        public_repos,
        locationURL: "https://goo.gl/maps/xS54udcr7Q3ZvtF98", // Set up the api
      };
      profile.stars = starData.length;  
      // console.log(profile);  
      
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


