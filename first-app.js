console.log('This is my first node app')

const fs = require('fs');
fs.writeFileSync('hello.txt','hello from node js');