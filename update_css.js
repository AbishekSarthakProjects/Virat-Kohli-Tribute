const fs = require('fs');

let css = fs.readFileSync('app/globals.css', 'utf8');

css = css.replace(/#0f1729/g, '#2B2A29');
css = css.replace(/#f5c842/g, '#D1AB3E');
css = css.replace(/#0a0f1f/g, '#252829');

// Replace standard lorenzo names
css = css.replace(/lorenzo-dark/g, 'vk-black');
css = css.replace(/lorenzo-accent/g, 'vk-red');
css = css.replace(/lorenzo-light/g, 'vk-light');
css = css.replace(/lorenzo-text-dark/g, 'vk-text-dark');
css = css.replace(/lorenzo-text-light/g, 'vk-text-light');

// Need to assure primary accent is Red #EC1C24
css = css.replace(/--vk-red: #D1AB3E;/g, '--vk-red: #EC1C24;\n  --vk-gold: #D1AB3E;');

fs.writeFileSync('app/globals.css', css);
