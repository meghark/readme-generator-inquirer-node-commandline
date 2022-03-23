
var generateTableOfContents = (data) => {

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


module.exports = readMeDate => {
 
    let{projectName, description, installation, usage, credits, license, contribute, tests, questions, githubuser, githublink, email} = readMeDate;

    return `
# ${projectName}

## Description
    
${description}
   
    
## Table of Contents
    
${generateTableOfContents(readMeDate)}
    
       
## Installation
    
${installation}
    
## Usage
    
${usage}

## Credits
    
${credits}
    
## License
    
${license}
   
    
## Contribute
    
${contribute}
   
    
## Tests
    
${tests}
   
    
## Questions
    
${githubuser}
${githublink}
${email}

    `;
}