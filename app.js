const puppeteer = require('puppeteer');

describe("Bongo Initial Test by Stalin", async ()=>{

    it("Load and run a free content", async () => {
        const browser = await puppeteer.launch({
            /* 
            ## IMPORTANT:: Use 'real' chrome instance instead of the default chrome that comes with puppeteer installation. OTHERWISE video will NOT run.

            ## Change chrome 'executablePath' with your chrome installation path; similar to one shown below 
            */
            executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', // adjust this line
            headless: false,
            slowMo: 40,
            defaultViewport: null
        });
        const page = await browser.newPage();
        await page.goto('https://bongobd.com/');
        const searchBtn = await page.waitForXPath('//*[@id="root"]/div/div/div/div[2]/header/div/div/div[2]/div[2]/div[1]/div[2]/input');
        await searchBtn.click();
        await searchBtn.type('Zero Point Episode 1', {delay: 10});
        await page.keyboard.press("Enter");
        const episode1 = await page.waitForXPath('//*[@id="root"]/div/div/div/div[3]/div/div/div/div[1]/div/div[2]/div/a/div/div');
        await episode1.click();
        await page.waitFor(4000);
        await page.waitForXPath('//*[@id="vod"]/div[4]/div[1]');

        await page.waitFor(30000); // waitFor used just to delay the completion of the task. 
        // Delay will last for 30 seconds before the browser exits to compensate for longer ads (if any shows up)
      
        await browser.close();
    });    
});
