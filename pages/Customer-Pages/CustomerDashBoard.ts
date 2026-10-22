import { Page,Locator } from "@playwright/test";
import { Dashboard } from "../Dashboard";

//This page finds locators for the admin related other links pages only. 
//The common functions like logout, change password will directly come from Dashboard

export class CustomerDashBoard extends Dashboard //Inherits properties of Dashboard page in here so that we can use it inside it
{
    private readonly cashInLink:Locator
    private readonly sendMoneyLink:Locator
    private readonly cashOutLink:Locator
    private readonly paymentLink:Locator
    private readonly selfStatementLink:Locator

    constructor(page: Page) {   
    super(page)             //Commom dashboard features can be used it from here like logout, profile etc
    
    this.cashInLink=page.getByRole("link",{name:"Create User"})
    this.sendMoneyLink=page.getByRole("link",{name:"Deposit (SYSTEM)"})
    this.cashOutLink=page.getByRole("link",{name:"Transaction List"})
    this.paymentLink=page.getByRole("link",{name:"User List"})
    this.selfStatementLink=page.getByRole("link",{name:"User List"})
    
    }

    async goCashIn()
    {await this.cashInLink.click() }

    async goSendMoney()
    {await this.sendMoneyLink.click() }

    async goCashOut()
    {await this.cashOutLink.click() }
    
    async goPayment()
    {await this.paymentLink.click() }

    async goSelfStatement()
    {await this.selfStatementLink.click() }

} 