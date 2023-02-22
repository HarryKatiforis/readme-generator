// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require ('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')
const { resolve } = require('path')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'what is the title of your project?',
        name: 'title',
        
    },

    {
        type: 'input',
        message: 'what license does your project use?',
        name: 'license'

    },
    {
        type: 'input',
        message: 'provide a description of your project',
        name: 'description',

    },
    {
        type: 'input',
        message: 'provide required steps to install your project',
        name: 'installation'

    },
    {
        type: 'input',
        message: 'provide required steps to install your project',
        name: 'usage'

    },
    {
        type: 'input',
        message: 'list your collaborators on the project',
        name: 'credit'

    },
    {
        type: 'input',
        message: 'provide github username',
        name: 'gitHubId'

    },
    {
        type: 'input',
        message: 'provide Email',
        name: 'email'

    },
    ]
    
 

   

    





// TODO: Create a function to write README file
function writeToFile(fileName, data,) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log('success!')
        }
    }
    
    )}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        console.log(data);
        writeToFile('README.md', generateMarkdown(data));

    })
};


// Function call to initialize app
init();
