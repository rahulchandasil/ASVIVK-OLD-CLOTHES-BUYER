const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to mobile
  await page.setViewport({ width: 375, height: 812 });
  
  try {
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle0', timeout: 10000 });
  } catch (e) {
    console.log('Timeout or error loading page:', e.message);
  }

  // Get layout info
  const layout = await page.evaluate(() => {
    const results = [];
    const elements = {
      'Navbar': document.querySelector('nav'),
      'Hero Section': document.querySelector('#home'),
      'Hero H1': document.querySelector('#home h1'),
      'Hero Img': document.querySelector('#home img'),
      'All Images': Array.from(document.querySelectorAll('img'))
    };

    for (const [name, el] of Object.entries(elements)) {
      if (!el) {
        results.push(`${name}: NOT FOUND`);
        continue;
      }
      
      if (Array.isArray(el)) {
        el.forEach((img, i) => {
          const rect = img.getBoundingClientRect();
          results.push(`Image ${i} (${img.src}): w=${rect.width}, h=${rect.height}, x=${rect.x}, y=${rect.y}, zIndex=${window.getComputedStyle(img).zIndex}, position=${window.getComputedStyle(img).position}`);
        });
      } else {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        results.push(`${name}: w=${rect.width}, h=${rect.height}, x=${rect.x}, y=${rect.y}, zIndex=${style.zIndex}, position=${style.position}, display=${style.display}`);
      }
    }
    return results;
  });

  console.log(layout.join('\n'));
  
  await browser.close();
})();
