const inquirer = require('inquirer');
const generateReadMe = require('./src/generateMarkdown.js');
const writeToFile = require('./utils/file-operations.js')

// Array of questions for input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: "Please provide a project name (Required).",
        validate: projectName => {
            if(projectName)
            {
                return true;
            }
            else{
                console.log("Please provide a project name");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message:"Provide a short description explaining the what, why, and how of your project (Required).",
        validate: description => {
            if(description)
            {
                return true;
            }
            else
            {
                console.log("Please provide a description");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message:"What are the steps required to install your project? (Required)",
        validate: installation => {
            if(installation)
            {
                return true;
            }
            else{
                console.log("Please provide steps to install");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message:"Provide instructions and examples for use.(Required)",
        validate: usage => {
            if(usage)
            {
                return true;
            }
            else{
                console.log("Please provide instructions and examples for use.");
            }
        }
    },
    {
        type: 'input',
        name: 'credits',
        message:"List your collaborators, if any, with links to their GitHub profiles."
    },
    {
        type: 'list',
        name: 'license',
        message:"Choose a license.",
        choices: ['MIT','Apache','GNU GPLV3','BSD','None']
    },
    {
        type: 'input',
        name: 'contribute',
        message:"How can others contribute?"
    },
    {
        type: 'input',
        name: 'tests',
        message:"Write tests for your application"
    },           
    {
        type: 'input',
        name: 'githubuser',
        message:"Provide github username"
    },        
    {
        type: 'input',
        name: 'email',
        message:"Provide email address for users to contact"
    }
];

const init= () => {
    askQuestions()
    .then(answers => {
        return generateReadMe(answers);        
    })
    .then(markDown => {
       return writeToFile(markDown);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    })
};

var askQuestions = () => {
    return inquirer.
        prompt(questions);
}

// Function call to initialize app
init();
/*const data1 = {
    projectName: 'Portfolio Project',
    description: 'Create a portfolio for job application',
    installation: 'npm install',
    usage: 'Download.',
    credits: 'None',
    license: 'MIT',
    contribute: 'Pulll request , email',
    tests: 'npm test',
    githubuser: 'meghark',
    email: 'megha.nambiar@gmail.com'
  };
generateReadMe(data1);*/