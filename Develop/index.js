// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');

// TODO: Create an array of questions for user input
console.log('Hello and welcome to my README generator. Please fill out each question prompt to fill out your README. For any that do not apply, please either select None or write N/A.')
const questions = [
    
    {
        name: 'title',
        message: 'What is the name of this project?'
    },
    {
        name: 'description',
        message: 'Describe your project. What purpose does it serve?'
    },
    {
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        name: 'projectUsage',
        message: 'Provide instructions on how to use your project'
    },
    {
        name: 'license',
        message: 'Please select a license to apply to your project.',
        type: 'list',
        choices: ['MIT', 'Apache_2.0', 'Boost_1.0', 'None']
    },
    {
        name: 'contributions',
        message: 'Please provide the GitHub username of any contributors to your project.'
    },
    {
        name: 'testing',
        message: 'Write tests for your application and provide examples on how to run them here.'
    },
    {
        name: 'githubName',
        message: 'What is your GitHub username, for those that wish to follow you?'
    },
    {
        name: 'yourEmail',
        message: 'What is your email address, should anyone have questions for you?'
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile('./README.md', data, (err) => {
        if (err) {
            return console.log(err);
        }
    console.log("You have successfully created your README file!");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (input) {
        // console.log(input)
        writeToFile("README.md", generateMarkdown(input))
    })
}

// Function call to initialize app
init();
