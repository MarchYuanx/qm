const fs = require('fs');
const path = require('path')

    const getFilesInDir = function(dir){
        var results = [path.resolve(dir)];
        var files = fs.readdirSync(dir,'utf-8');
        console.log(files)

        

        return results;

    }

    const files = getFilesInDir('./src');
    console.log(files);
    

