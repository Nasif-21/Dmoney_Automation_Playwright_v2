import { test, expect, Page, BrowserContext } from '@playwright/test';
import { Faker } from '@faker-js/faker';
import { HomePage } from '../pages/HomePage';
import { Login } from '../pages/Login';
import { setAuth } from '../utils/utils';

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

    test('Go to homepage and do login',async({})=>{
        test.info().annotations.push({
            type:'Note',
            description:'Visit website and test the login page redirection',
        })
        await page.goto("/");
        const homePage=new HomePage(page);
        homePage.clickLogin();
        const login=new Login(page)
        login.doAdminLogin();
        await page.waitForLoadState();
        await setAuth(page,"token");
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