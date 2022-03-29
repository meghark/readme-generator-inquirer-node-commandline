
const generateTableOfContents = (data) => {

    var contentsArr = [];

    if(data.installation)
    {
        contentsArr.push('- [Installation](#installation)');
    }
    if(data.usage)
    {
        contentsArr.push('- [Usage](#usage)');
    }
    if(data.credits)
    {
        contentsArr.push('- [Credits](#credits)');
    }
    if(data.license)
    {
        contentsArr.push('- [License](#license)');
    }
    if(data.contribute)
    {
        contentsArr.push('- [Contribute](#contribute)');
    }
    if(data.tests)
    {
        contentsArr.push('- [Tests](#tests)');
    }
    if(data.questions)
    {
        contentsArr.push('- [Questions](#questions)');
    }

    return contentsArr.join('\n');
}


const  generateCredits = (credit) => {

    if(credit){
        return `

# Credits

${credit}

        `
    }
    else{
        return '';
    }
}

const  generateContribute = (contribute) => {
    if(contribute){
        return `

# Contribute

${contribute}
        `
    }
    else{
        return '';
    }
}

const  generateTest = (test) => {
    if(test)
    {
return `

# Tests

${test}

`
    }
    else{
        return '';
    }
    

}

const  generateQuestions = (githubuser,  email) => {
    return `

# Questions

if you have any questions about the repository, open an issue/pr or contact me directly at ${email}.
You can find more of my work at [${githubuser}](https://github.com/${githubuser}).
`
}

const renderLicenseBadge = (license)=> {
    'MIT','Apache','GNU GPLV3','BSD','None'
    let url='';
    switch(license){
        case 'MIT':
            url='https://img.shields.io/badge/license-MIT-green';
            break;
        case 'Apache':
            url='https://img.shields.io/badge/license-Apache-blue';
            break;
        case 'GNU GPLV3':
            url='https://img.shields.io/badge/license-GPL-blue';
            break;
        case 'BSD':
            url='https://img.shields.io/badge/license-BSD-green';
            break;
    }
if(url){
return `
![GitHub license](${url}) 
`
}
else
{
    return '';
}
  
}
const generateMarkdown = readMeData => {
 
    let{projectName, description, installation, usage, credits, license, contribute, tests,  githubuser,  email} = readMeData;

    return `
# ${projectName}

${renderLicenseBadge(license)}


## Description
    
${description}
   
    
## Table of Contents
    
${generateTableOfContents(readMeData)}
    
       
## Installation
    
${installation}
    
## Usage
    
${usage}
${generateCredits(credits)}   
## License
    
${license}  
${generateContribute(contribute)}
${generateTest(tests)}
${generateQuestions(githubuser,  email)}
    `;
}

module.exports = generateMarkdown;