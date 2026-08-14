const http = require('http');

http.get('http://localhost:5175/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', async () => {
    // extract src="..." and href="..."
    const regex = /(?:src|href)="([^"]+)"/g;
    let matches;
    const urls = [];
    while ((matches = regex.exec(data)) !== null) {
      if (matches[1].startsWith('/')) {
        urls.push(matches[1]);
      }
    }
    
    console.log("Found URLs in HTML:", urls);
    
    for (const url of urls) {
      const fullUrl = `http://localhost:5175${url}`;
      await new Promise((resolve) => {
        http.get(fullUrl, (r) => {
          if (r.statusCode === 404) {
            console.error(`404 NOT FOUND: ${url}`);
          } else {
            console.log(`OK ${r.statusCode}: ${url}`);
          }
          resolve();
        }).on('error', (e) => {
          console.error(`ERROR fetching ${url}: ${e.message}`);
          resolve();
        });
      });
    }
  });
});
