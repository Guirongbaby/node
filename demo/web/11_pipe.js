const fs = require('fs');
const path = require('path');

let srcFile = path.join(__dirname, 'a.mp4');
let distFile = path.join(__dirname,'b.mp4');

let readscream = fs.createReadStream(srcFile);
let writescream = fs.createWriteStream(distFile);

rs.pipe(ws); // 可读流和可写流之间建立的管道

