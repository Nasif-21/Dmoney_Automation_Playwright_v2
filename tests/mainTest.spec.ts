import { test, expect, Page, BrowserContext } from '@playwright/test';
import { faker, Faker } from '@faker-js/faker';
import { HomePage } from '../pages/HomePage';
import { Login } from '../pages/Login';
import { generateRandomNumber, saveJsonData, setAuth } from '../utils/utils';
import { Dashboard } from '../pages/Dashboard';
import { AdminDashBoard } from '../pages/Admin-Pages/AdminDashBoard';
import { CreateUser } from '../pages/Admin-Pages/CreateUser';
import { UserList } from '../pages/Admin-Pages/UserList';
import { UserModel } from '../model/userModel';
import { AgentDashBoard } from '../pages/Agent-Pages/AgentDashBoard';
import { CashIn } from '../pages/Agent-Pages/CashIn';

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
        //await page.pause();   
        
    })

     test('Creating Agent successfully and status check ',{tag:[`@smoke`,`@regression`]},async({})=>{
        test.info().annotations.push({
             type:'Note',
             description:'Creating an agent from admin account and check status',
         })

         const adminDashBoard=new AdminDashBoard(page)
         const createUser=new CreateUser(page)
         

        adminDashBoard.goCreateUser() 
        await page.waitForLoadState()
         const userModel:UserModel={
            Name:faker.person.fullName(),
            Email:`skfamily0304+${generateRandomNumber(100,999)}@gmail.com`,
            Password:"1234",
            Phone_Number:`01${generateRandomNumber(100000000,999999999)}`,
            NID:`${generateRandomNumber(1000000,9999999)}`,
            
         }
        
         createUser.createNewAgentUser(userModel);
         saveJsonData(userModel)
         await page.waitForLoadState()
         await expect(page).toHaveURL("https://dmoneyportal.roadtocareer.net/admin/users")
        
        const userList=new UserList(page)
        await page.waitForLoadState()
        await userList.checkUserCreateStatus()
        await page.waitForLoadState()
         
         
         //await page.pause();

        
        
        
     })

      test('Check user status active',{tag:[`@smoke`,`@regression`]},async({})=>{
        test.info().annotations.push({
            type:'Note',
            description:'Update user status to active',
        })
        const userList=new UserList(page)
        //await page.waitForTimeout(3000)
        await userList.activeUserStatus()
        //await page.waitForTimeout(3000)
        await userList.checkUserActiveStatus()
        //await page.waitForTimeout(3000)
        await userList.doLogout()
        await page.pause()
        
        
    })

    test('System login and deposit money to current agent',{tag:[`@smoke`,`@regression`]},async({})=>{
        test.info().annotations.push({
            type:'Note',
            description:'Log in using system credencials and deposit to the recent agent',
        })

        const login=new Login(page);
        await login.doSysetmLogin();
        await setAuth(page,"token")

        const systemDashboard=new AgentDashBoard(page)
        await systemDashboard.goCashIn()

        const cashIn=new CashIn(page)
        await cashIn.doDeposit()

        await page.pause()
           
    })

})

  /*  test('Go to homepage and do login',{tag:[`@smoke`,`@regression`]},async({})=>{
        test.info().annotations.push({
            type:'Note',
            description:'Visit website and test the login page redirection',
        })

        
        
        
    })
        */

    //For checking balance inside a profile
    //  const balance=await dashboard.getBalance()
        //  console.log(balance)        