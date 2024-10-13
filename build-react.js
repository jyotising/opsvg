const fs = require('fs');
const path = require('path');
const svgToJsx = require('svg-to-jsx');

const iconsDir = './icons';
const outputDir = './react-icons';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.readdirSync(iconsDir).forEach(async (file) => {
  const svg = fs.readFileSync(path.join(iconsDir, file), 'utf8');
  const jsx = await svgToJsx(svg);
  const componentName = path.basename(file, '.svg');
  
  const componentContent = `
    import React from 'react';
    const ${componentName} = (props) => (${jsx});
    export default ${componentName};
  `;

  fs.writeFileSync(path.join(outputDir, `${componentName}.jsx`), componentContent);
});
