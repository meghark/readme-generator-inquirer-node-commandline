const fs = require('fs');

//The function is called to save the generated markdown to the relevant folder.
//The function returns a promise.
//If the file operation is successful it will return the content within resolve()
//else error message in reject() is returned.
const writeToFile= data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err =>{
            if(err)
            {
                reject(err);
                return;
            };
            resolve({
                ok: true,
                message: 'Read me generated and available in dist folder'
            });
        })
    });
    
    
}

module.exports = writeToFile;