const fs = require('fs');
const path = require('path');

const characters = [
    { name: "Augusta", type: "Versatile", potential: "S" },
    { name: "Iuno", type: "Versatile", potential: "S" },
    { name: "Phrolova", type: "Versatile", potential: "A" },
    { name: "Carlotta", type: "Versatile", potential: "A" },
    { name: "Cartethyia", type: "Specialist", potential: "A" },
    { name: "Galbrena", type: "Versatile", potential: "S" },
    { name: "Jinhsi", type: "Specialist", potential: "A" },
    { name: "Jiyan", type: "Specialist", potential: "S" },
    { name: "Zani", type: "Specialist", potential: "B" },
    { name: "Brant", type: "Versatile", potential: "S" },
    { name: "Camellya", type: "Specialist", potential: "A" },
    { name: "Xiangli Yao", type: "Specialist", potential: "A", filename: "xiangli-yao.ts" }, // Filename override
    { name: "Encore", type: "Specialist", potential: "A" },
    { name: "Rover Havoc", type: "Specialist", potential: "B", filename: "rover-havoc.ts" },
    { name: "Calcharo", type: "Specialist", potential: "C" },
    { name: "Lynae", type: "Versatile", potential: "S" },
    { name: "Ciaccona", type: "Specialist", potential: "A" },
    { name: "Lupa", type: "Specialist", potential: "S+" },
    { name: "Qiuyuan", type: "Specialist", potential: "A" },
    { name: "Cantarella", type: "Specialist", potential: "B" },
    { name: "Changli", type: "Versatile", potential: "C" },
    { name: "Mortefi", type: "Specialist", potential: "B" },
    { name: "Phoebe", type: "Specialist", potential: "B" },
    { name: "Roccia", type: "Specialist", potential: "A" },
    { name: "Sanhua", type: "Versatile", potential: "A" },
    { name: "Zhezhi", type: "Versatile", potential: "B" },
    { name: "Jianxin", type: "Versatile", potential: "D" }, // Defaulted to Versatile per plan
    { name: "Yinlin", type: "Specialist", potential: "B" },
    { name: "Shorekeeper", type: "Versatile", potential: "S+" },
    { name: "Verina", type: "Versatile", potential: "S" },
    { name: "Chisa", type: "Specialist", potential: "S" },
    { name: "Mornye", type: "Specialist", potential: "S+" }
];

const directory = 'c:/Users/gdgbo/wuwaguide/wuwatier/lib/characters';

characters.forEach(char => {
    let filename = char.filename || (char.name.toLowerCase() + ".ts");
    const filePath = path.join(directory, filename);

    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Check if fields already exist
        if (content.includes("profileType:") || content.includes("potential:")) {
            // Skip if already updated or update regex? Simplest is to assume not updated for now since this is a new request.
            // Or perform regex check to ensure we don't duplicate.
        }

        // We want to insert it after the 'tier' object block.
        // Look for `tier: { ... },`
        // We can just look for the closing brace of tier and comma.

        // Robust insertion point: After `tags: [...],`
        // Regex: /tags:\s*\[[\s\S]*?\],/

        const typeStr = `\n    profileType: "${char.type}",\n    potential: "${char.potential}",`;

        if (content.match(/tags:\s*\[[\s\S]*?\],/)) {
            content = content.replace(/(tags:\s*\[[\s\S]*?\],)/, `$1${typeStr}`);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${char.name} in ${filename}`);
        } else {
            console.log(`Could not find insertion point for ${char.name} in ${filename}`);
            // Try fallback: after `role: "...",`
            if (content.match(/role:\s*".*?",/)) {
                content = content.replace(/(role:\s*".*?",)/, `$1${typeStr}`);
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Updated ${char.name} in ${filename} (fallback)`);
            }
        }

    } else {
        console.log(`File not found: ${filename}`);
    }
});
