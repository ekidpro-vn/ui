const fs = require('fs');
const path = require('path');

if (!fs.existsSync(path.resolve(__dirname, '../tailwind.css'))) {
  console.debug(`Do not found pre-built tailwind css. We need to install it`);

  require('child_process').execSync('NODE_ENV=production npx tailwindcss -o tailwind.css', {
    stdio: 'inherit',
  });

  console.debug(`Build tailwindcss completed!`);
}
