// Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// Created an array of questions for user input
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
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please write a short description for your project.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license should your project have?',
        choices: ['MIT', 'GPL', 'Apache', 'MPL', 'Unlicensed'],
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What command should be used to install dependencies?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be used to run tests?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repository?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repository?'
    },
];

// Created a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success! README Generated!'));
}

// Created a function to initialize app
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
