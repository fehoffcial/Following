const  puppeteer = require("puppeteer");
function Pedidos(email,senha){
    (async () => {
      try{ 
        console.log(`Inicializando com Sucesso ✅  [ SPX ] [ ID: ] [ Technical Analysis [ SPX ] ]`);
        const browser = await puppeteer.launch({headless: false, args: ['--no-sandbox']});
        const page = await browser.newPage();
        console.log(`Processando com Sucesso ✅  [ SPX ] [ ID: ] [ Technical Analysis [ SPX ] ]`);
        await page.goto('https://www.instagram.com', {waitUntil: 'load', timeout: 0});
        await new Promise(r => setTimeout(r, 2000));
        await page.waitForSelector('._abdc');
        let GetItem = await page.$x(`/html/body/div[5]/div[1]/div/div[2]/div/div/div/div/div[2]/div/button[1]`)
        await GetItem[0].click();
        await new Promise(r => setTimeout(r, 2000));
        await page.waitForSelector('#loginForm');
        GetItem = await page.$x(`//*[@id="loginForm"]/div/div[1]/div/label/input`)
        await GetItem[0].type(email);
        await new Promise(r => setTimeout(r, 2000));
        await page.waitForSelector('#loginForm');
        GetItem = await page.$x(`//*[@id="loginForm"]/div/div[2]/div/label/input`)
        await GetItem[0].type(senha)
        await new Promise(r => setTimeout(r, 2000));
        await page.waitForSelector('#loginForm');
        GetItem = await page.$x(`//*[@id="loginForm"]/div/div[3]/button`)
        await GetItem[0].click()
        await new Promise(r => setTimeout(r, 90000));
        console.log("Acesso:");
        // ! Rechapt 
        GetItem = await page.$x(`/html/body/div[2]/div/div/div[2]/div/div/div[1]/div[1]/div[2]/div[2]/section/main/div/header/section/ul/li[2]/a`)
        await GetItem[0].click()
        await new Promise(r => setTimeout(r, 7000));
        const text = await page.evaluate(() => Array.from(document.querySelectorAll('[class=" _acan _acap _acas _aj1- _ap30"]'), element => element.click()));
      }catch(error){
        console.log(`Erro no PDF ❌ [ SPX ] [ ID: ] [ ERRO Technical Analysis [ SPX ] ]`);
      }finally{
        console.log(`[ REQUEST ✅  ] [ SPX ] [ ID: ] [ Technical Analysis [ SPX ] ]`);
      }
    })();
  };
Pedidos("Bbb24.oficiall","6897668976");