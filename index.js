#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const [, , command, ...filenames] = process.argv;

switch(command){
    case 'init': 
        console.log('init');
        break;
    case 'check':
        console.log('check');
        const filesInDirectory = fs.readdirSync(path.resolve('./'));

        filenames?.forEach((filename) => {
            const doesFileExist = filesInDirectory.some((fileInDirectory) => fileInDirectory.toLowerCase() === filename.toLowerCase());
            if (!doesFileExist) {
                throw new Error('file not found', filename);
            }
        })

        console.log('Check is completed!');
        break;
    default:
        console.log('Unknown command');

}
