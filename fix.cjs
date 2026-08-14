const fs = require('fs');
const path = require('path');
const dir = 'src/components';
fs.readdirSync(dir).filter(f => f.endsWith('.jsx')).forEach(f => {
  const p = path.join(dir, f);
  let c = fs.readFileSync(p, 'utf8');
  c = c.replace(/className="container-fluid/g, 'className="site-container');
  c = c.replace(/className="container /g, 'className="site-container ');
  fs.writeFileSync(p, c);
});
console.log('Fixed containers');
