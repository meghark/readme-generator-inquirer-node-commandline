
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


var  generateCredits = (credit) => {

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

var  generateContribute = (contribute) => {
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

var  generateTest = (test) => {
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

var  generateQuestions = (githubuser, githublink, email) => {
    return `

# Questions

if you have any questions about the repository, open an issue/pr or contact me directly at ${email}.
You can find more of my work at [${githubuser}](${githublink}).


`

}


module.exports = readMeDate => {
 
    let{projectName, description, installation, usage, credits, license, contribute, tests,  githubuser, githublink, email} = readMeDate;

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
${generateCredits(credits)}   
## License
    
${license}  
${generateContribute(contribute)}
${generateTest(tests)}
${generateQuestions(githubuser, githublink, email)}
    `;
}