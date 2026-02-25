import os
import re

directory = "c:/Users/gabri/Desktop/Portfolio Ruffini/src/app/pages/projects"
exclude_files = ["Oracle.tsx", "Tarot.tsx"]

for filename in os.listdir(directory):
    if filename.endswith(".tsx") and filename not in exclude_files:
        filepath = os.path.join(directory, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        component_name = filename[:-4] # e.g., 'CourtiBrillanti'

        # Build props interface string
        props_interface = f"""interface {component_name}Props {{\n  isMenuOpen: boolean;\n  onToggleMenu: () => void;\n}}\n\n"""

        # Replace 1: Add the Props interface before the component definition
        # Cases: 'export function X', 'export default function X'
        
        updated_content = content
        if f"export function {component_name}()" in updated_content:
            updated_content = updated_content.replace(
                f"export function {component_name}()",
                f"{props_interface}export function {component_name}({{ isMenuOpen, onToggleMenu }}: {component_name}Props)"
            )
        elif f"export default function {component_name}()" in updated_content:
            updated_content = updated_content.replace(
                f"export default function {component_name}()",
                f"{props_interface}export default function {component_name}({{ isMenuOpen, onToggleMenu }}: {component_name}Props)"
            )
        elif f"const {component_name} = ()" in updated_content:
            updated_content = updated_content.replace(
                f"const {component_name} = ()",
                f"{props_interface}const {component_name} = ({{ isMenuOpen, onToggleMenu }}: {component_name}Props)"
            )
            
        # Replace 2: Update `<Header />` to `<Header isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />`
        updated_content = re.sub(
            r"<Header\s*/>",
            "<Header isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />",
            updated_content
        )

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(updated_content)
            print(f"Updated {filename}")
