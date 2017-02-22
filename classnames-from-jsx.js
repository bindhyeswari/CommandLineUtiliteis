#!/usr/bin/env node --harmony

var path = require('path');
var fs = require('fs');
const filePathName = process.argv[2];
if (typeof filePathName === 'undefined') console.warn('Cant do much! No file suggested!');
console.log('File entered: ', filePathName);
const str = fs.readFileSync(filePathName).toString();
const regex = /className="([^"]+)"/gmi;
const set = new Set();
let match;
do {
    match = regex.exec(str);
    if (match !== null) {
        set.add(match[1]);
    }
} while (match !== null);

console.log(Array.from(set));
