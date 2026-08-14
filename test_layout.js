import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to a common mobile width to check overflow
  await page.setViewport({ width: 390, height: 844 });
  
  // Give the server time to start
  await new Promise(r => setTimeout(r, 3000));
  
  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
    
    // Check for unstyled HTML by checking if the main container has the CSS applied
    const bgCol = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });
    console.log('Body background color:', bgCol); // should be rgb(247, 243, 236) which is warm-ivory
    
    // Check horizontal overflow
    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });
    console.log('Has horizontal overflow:', hasOverflow);
    
    // Check if Navbar rendered
    const hasNavbar = await page.evaluate(() => !!document.querySelector('nav'));
    console.log('Navbar rendered:', hasNavbar);
    
    // Check if Hero rendered
    const hasHero = await page.evaluate(() => !!document.getElementById('home'));
    console.log('Hero rendered:', hasHero);
    
    await page.screenshot({ path: 'screenshot.png' });
    console.log('Screenshot saved to screenshot.png');
    
  } catch(e) {
    console.error('Error during testing:', e);
  } finally {
    await browser.close();
  }
})();
