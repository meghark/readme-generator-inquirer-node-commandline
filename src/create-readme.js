
module.exports = readMeDate => {
 
    let{projectName, description, Installation, usage, credits, license, contribute, tests, questions, githubuser, githublink, email} = readMeDate;

    return `
    # ${projectName}

    ## Description
    
    ${description}
   
    
    ## Table of Contents
    
    If your README is long, add a table of contents to make it easy for users to find what they need.
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
       
    ## Installation
    
    ${Installation}
    
    ## Usage
    
    ${usage}

    ## Credits
    
    ${credits}
    
    ## License
    
    ${license}
   
    
    ## How to Contribute
    
    ${contribute}
   
    
    ## Tests
    
    ${tests}
   
    
    ## Questions
    
    ${githubuser}
    ${githublink}
    ${email}

    `;
}