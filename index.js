// TODO: Include packages needed for this application
// Dependencies needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Links questions to README template
const ReadMeTemplate = require("./src/ReadMeTemplate");

// Creates a function to write README file
const createFile = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
     {
            type:'input',
            name:'username',
            message:'Enter GitHub username:'
        },
        {
            type:'input',
            name:'projectTitle',
            message:'What is the project title?'
        },
        {
            type:'input',
            name:'description',
            message:'Describe the project:'
        },
        {
            type:'input',
            name:'installation',
            message:'What are the steps to install this project?'
        },
        {
            type:'input',
            name:'usage',
            message:'Please describe the steps to master the project:'
        },
        
        {
            type:'list',
            name:'license',
            message:'Choose the license for this project:',
            choices: ['GNU AGPL', 'GNU LGPL', 'Mozilla', 'Apache','MIT', 'Boost Software','The Unlicense']
        },
        {
            type:'input',
            name:'features',
            message:'List project features/languages:'
        },
       
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    var inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();
