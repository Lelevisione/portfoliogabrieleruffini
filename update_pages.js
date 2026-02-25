const fs = require('fs');
const path = require('path');

const directory = "c:/Users/gabri/Desktop/Portfolio Ruffini/src/app/pages/projects";
const excludeFiles = ["Oracle.tsx", "Tarot.tsx"];

fs.readdirSync(directory).forEach(filename => {
    if (filename.endsWith(".tsx") && !excludeFiles.includes(filename)) {
        const filepath = path.join(directory, filename);
        let content = fs.readFileSync(filepath, 'utf-8');

        const componentName = filename.slice(0, -4);

        const propsInterface = `interface ${componentName}Props {\n  isMenuOpen: boolean;\n  onToggleMenu: () => void;\n}\n\n`;

        if (content.includes(`export function ${componentName}()`)) {
            content = content.replace(
                `export function ${componentName}()`,
                `${propsInterface}export function ${componentName}({ isMenuOpen, onToggleMenu }: ${componentName}Props)`
            );
        } else if (content.includes(`export default function ${componentName}()`)) {
            content = content.replace(
                `export default function ${componentName}()`,
                `${propsInterface}export default function ${componentName}({ isMenuOpen, onToggleMenu }: ${componentName}Props)`
            );
        } else if (content.includes(`const ${componentName} = ()`)) {
            content = content.replace(
                `const ${componentName} = ()`,
                `${propsInterface}const ${componentName} = ({ isMenuOpen, onToggleMenu }: ${componentName}Props)`
            );
        }

        content = content.replace(
            /<Header\s*\/>/g,
            "<Header isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />"
        );

        fs.writeFileSync(filepath, content, 'utf-8');
        console.log(`Updated ${filename}`);
    }
});
