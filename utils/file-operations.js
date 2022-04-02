const fs = require('fs');

const writeToFile= data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/generatedreadme.md', data, err =>{
            if(err)
            {
                reject(err);
                return;
            };
            resolve({
                ok: true,
                message: 'Read me generated'
            });
        })
    });
    
    
}

module.exports = writeToFile;