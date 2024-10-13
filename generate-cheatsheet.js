const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

// Define the paths for icons and the output cheatsheet
const iconsDir = './icons';
const templateFile = './cheatsheet.hbs';
const outputFile = './cheatsheet.html';

// Read the Handlebars template
const templateContent = fs.readFileSync(templateFile, 'utf8');
const template = handlebars.compile(templateContent);

// Read the icon files and prepare the icons array
const icons = fs.readdirSync(iconsDir).filter(file => file.endsWith('.svg'));

// Generate the cheatsheet HTML
const cheatsheet = template({ icons });

// Write the generated cheatsheet to an HTML file
fs.writeFileSync(outputFile, cheatsheet);

console.log(`Cheatsheet generated at ${outputFile}`);
