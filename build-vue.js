const fs = require('fs');
const path = require('path');
const svgToJsx = require('svg-to-jsx');

const iconsDir = './icons';
const outputDir = './vue-icons';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.readdirSync(iconsDir).forEach(async (file) => {
  const svg = fs.readFileSync(path.join(iconsDir, file), 'utf8');
  const jsx = await svgToJsx(svg);
  const componentName = path.basename(file, '.svg');

  const componentContent = `
    <template>
      ${jsx}
    </template>
    <script>
    export default {
      name: '${componentName}',
      props: {
        width: {
          type: String,
          default: '24px'
        },
        height: {
          type: String,
          default: '24px'
        }
      }
    };
    </script>
  `;

  fs.writeFileSync(path.join(outputDir, `${componentName}.vue`), componentContent);
});
