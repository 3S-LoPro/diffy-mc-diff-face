import diff from './src';
import fs from 'fs-extra'


let oldHtml = fs.readFileSync('./old.html', 'utf8');
let newHtml = fs.readFileSync('./new.html', 'utf8');

// let oldHtml = '<p>Some <em>old</em> html here</p>';
// let newHtml = '<p>Some <b>new</b> html goes here</p>';

let result = diff(oldHtml, newHtml);

fs.writeFileSync('./diff.html', result, 'utf8');
console.log('DONE');