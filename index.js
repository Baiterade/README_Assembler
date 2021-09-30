// TODO: Include packages needed for this application

const inq = require("inquirer");

const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",

        name: "repoName",

        message: "Enter the name of your repository:",
    },
    {
        type: "input",

        name: "desc",

        message: "Enter a description for your repository:",
    },
    {
        type: "input",

        name: "instInst",

        message: "Enter installation instructions:",
    },
    {
        type: "input",

        name: "useInfo",

        message: "Enter usage information:",
    },
    {
        type: "input",

        name: "contGuide",

        message: "Enter contribution guidelines:",
    },
    {
        type: "input",

        name: "testInst",

        message: "Enter test instructions:",
    },
    {
        type: "checkbox",

        name: "lisc",

        message: "Choose a license:",

        choices: ["CCO (Universal Public Domain Dedication)","Attribution", "Attribution-ShareAlike", "Attribution-NoDerivatives",
                "Attribution-NonCommercial", "Attribution-NonCommercial-ShareAlike", "Attribution-NonCommercial-NoDerivatives"],
    },
    {
        type: "input",

        name: "username",

        message: "Enter your github username:",
    },
    {
        type: "input",

        name: "email",

        message: "Enter your email:",
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data){

    fs.writeFile(fileName, data, (err) => {
        if (err) {
          throw err;
        }
      });

}

// TODO: Create a function to initialize app
function init() {
    inq.prompt(questions).then((response => {

        writeToFile("README.md", generateMarkdown(response));

    }))
}

function generateMarkdown(data) {
return `
# ${data.repoName}
  
## Description
    
${data.desc}
  
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Tests](#test)
  
## <a name="installation"></a>Installation
  
${data.instInst}
  
## <a name="usage"></a>Usage
  
${data.useInfo}
  
## <a name="contribute"></a>How to Contribute
   
${data.contGuide}
  
## Tests
  
${data.testInst}
`;
}

// Function call to initialize app
init();