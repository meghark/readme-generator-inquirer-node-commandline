
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

const getProjectName = (projectName) =>
{
    const retProject = `\n# ${projectName}\n`;    
    return retProject; 
}

const getDescription = (description) =>
{
    const retDescription = `\n## Description\n\n${description}\n`;    
    return retDescription; 
}

const getInstall= (install) =>
{
    const retInstall = `\n## Installation\n\n${install}\n`;    
    return retInstall; 
}

const getUsage= (usage) =>
{
    const retValue = `\n## Usage\n\n${usage}\n`;    
    return retValue; 
}

const getLicense= (license) =>
{
    const retValue = `\n## License\n\n${license}\n`;    
    return retValue; 
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
        returnLicense=`![GitHub license](${url})\n`;    
    }
    return returnLicense;
}
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
    console.log(markdown);
    return markdown;
}

module.exports = generateMarkdown;