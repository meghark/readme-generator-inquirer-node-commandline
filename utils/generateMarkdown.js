
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
    let retCredit ='';
    if(credit){
        retCredit=`\n# Credits\n\n${credit}\n`;        
    }
    return retCredit;
}

const  generateContribute = (contribute) => {
    let retContribute='';

    if(contribute){
        retContribute = `\n# Contribute\n\n${contribute}\n`;
    }
    return retContribute;
}

const  generateTest = (test) => {
    let returnTest='';
    if(test)
    {
        returnTest = `\n# Tests\n\n${test}\n`;         
    }
    return returnTest; 
}

const  generateQuestions = (githubuser,  email) => {
    let questions =`\n# Questions\n\nif you have any questions about the repository, open an issue/pr`;
    if(!githubuser && !email)
    {
        return '';
    }
    if(email)
    {
        questions += ` or contact me directly at ${email}`;
    }

    if(githubuser)
    {
        questions += `.\nYou can find more of my work at [${githubuser}](https://github.com/${githubuser}).\n`;
    }
    
    return questions; 
}

const renderLicenseBadge = (license)=> {
    'MIT','Apache','GNU GPLV3','BSD','None'
    let url='';
    let returnLicense='';
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
        returnLicense=`![GitHub license](${url})`;    
    }
    return returnLicense;
}
const generateMarkdown = readMeData => {
 
    let{projectName, description, installation, usage, credits, license, contribute, tests,  githubuser,  email} = readMeData;
    console.log(generateContribute(contribute));

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