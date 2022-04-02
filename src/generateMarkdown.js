
//Function creates the table of content for the markdown.
//The links are will take user to approriate sections.
//The links for optional section will be displayed only if user provides an input.
const generateTableOfContents = (data) => {

    var contentsArr = [];
    let retTable=`\n## Table of Contents\n\n`;

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

    retTable += `\t`;
    retTable += contentsArr.join('\n\t');

    return retTable;
}

//Function creates the credit section of the markdown.
//This is an optional question and section will be generated only if user has 
//provided as input.
const  generateCredits = (credit) => {
    let retCredit ='';
    if(credit){
        retCredit=`\n## Credits\n\n${credit}\n`;        
    }
    return retCredit;
}

//Function creates the contribute section of the markdown.
//This is an optional question and section will be generated only if user has 
//provided as input.
const  generateContribute = (contribute) => {
    let retContribute='';

    if(contribute){
        retContribute = `\n## Contribute\n\n${contribute}\n`;
    }
    return retContribute;
}

//Function creates the test section of the markdown.
//This is an optional question and section will be generated only if user has 
//provided as input.
const  generateTest = (test) => {
    let returnTest='';
    if(test)
    {
        returnTest = `\n## Tests\n\n${test}\n`;         
    }
    return returnTest; 
}

//Function creates the questions section of the markdown.
//These are optional user inputs the section will have content displayed
//based on user entries.
const  generateQuestions = (githubuser,  email) => {
    let questions =`\n## Questions\n\nif you have any questions about the repository, open an issue/pr`;
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

//Function creates the project name header of the markdown.
const getProjectName = (projectName) =>
{
    const retProject = `\n# ${projectName}\n`;    
    return retProject; 
}

//Function creates the description section of the markdown.
const getDescription = (description) =>
{
    const retDescription = `\n## Description\n\n${description}\n`;    
    return retDescription; 
}

//Function creates the install section of the markdown.
const getInstall= (install) =>
{
    const retInstall = `\n## Installation\n\n${install}\n`;    
    return retInstall; 
}

//Function creates the usage section of the markdown.
const getUsage= (usage) =>
{
    const retValue = `\n## Usage\n\n${usage}\n`;    
    return retValue; 
}

//Function creates the license section of the markdown.
const getLicense= (license) =>
{
    const retValue = `\n## License\n\nThis project is lincensed under the ${license} license.\n`;   
    return retValue; 
}

//Function generates the license badge based on user selected license.

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
        returnLicense=`![GitHub license](${url})\n`;    
    }
    return returnLicense;
}

//The following function generates markdown string for return by calling the 
// related functions. This will be the functions called by the index app.
const generateMarkdown = readMeData => {
 
    let{projectName, description, installation, usage, credits, license, contribute, tests,  githubuser,  email} = readMeData;
    let markdown= getProjectName(projectName);
    markdown += renderLicenseBadge(license);
    markdown += getDescription(description);
    markdown += generateTableOfContents(readMeData);
    markdown += getInstall(installation);
    markdown += getUsage(usage);
    markdown += generateCredits(credits);
    markdown += getLicense(license);
    markdown += generateContribute(contribute);
    markdown += generateTest(tests);
    markdown += generateQuestions(githubuser,  email);
    return markdown;
}

module.exports = generateMarkdown;