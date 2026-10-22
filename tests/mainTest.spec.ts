import { test, expect, Page, BrowserContext } from '@playwright/test';
import { Faker } from '@faker-js/faker';
import { HomePage } from '../pages/HomePage';
import { Login } from '../pages/Login';
import { setAuth } from '../utils/utils';
import { Dashboard } from '../pages/Dashboard';
import { AdminDashBoard } from '../pages/Admin-Pages/AdminDashBoard';

test.describe.serial("Full Dmoney app automation",()=>{

    let page:Page;
    let browserContext:BrowserContext;

    test.beforeAll(async({browser})=>{
        browserContext=await browser.newContext();
        page=await browserContext.newPage();

    });

    test.afterAll(async()=>{
        //await page.close();
    })

    test('Go to homepage and do successful admin login',{tag:[`@smoke`, `@regression`]},async({})=>{
        test.info().annotations.push({
            type:'Note',
            description:'Visit website and do successful admin login',
        })
        await page.goto("/");
        const homePage=new HomePage(page);
        const dashboard=new Dashboard(page);
        const login=new Login(page)
        

        homePage.clickLogin();
        
        await login.doAdminLogin();
        await page.waitForLoadState();

        const dashBoardTitleString=await dashboard.getTitleText()
        await expect(dashBoardTitleString).toBe('Admin');
        await setAuth(page,"token");
        await page.pause();   
        
    })

     test('Creating Agent successfully ',{tag:[`@smoke`,`@regression`]},async({})=>{
        test.info().annotations.push({
             type:'Note',
             description:'Creating an agent from admin account',
         })

         const adminDashBoard=new AdminDashBoard(page)

         adminDashBoard.goCreateUser()

         
         await page.pause();

        
        
        
     })

})

  /*  test('Go to homepage and do login',async({})=>{
        test.info().annotations.push({
            type:'Note',
            description:'Visit website and test the login page redirection',
        })

        
        
        
    })
        */

    //For checking balance inside a profile
    //  const balance=await dashboard.getBalance()
        //  console.log(balance)        