// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// const path = require('path');
// const {log} = require('console');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub user name?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'Please write a short description for your project.',
      },
      {
        type: 'list',
        name: 'projectLicense',
        message: 'What license should your project have?',
        choices: ['MIT', 'GPL', 'Apache', 'MPL', 'Unlicensed'],
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile('README.md', generateMarkdown({...data}));
        console.log('Generating professional README..');
        console.log(data);
    })
}

// Function call to initialize app
init();
