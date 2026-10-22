import { Page,Locator } from "@playwright/test";
import { Dashboard } from "../Dashboard";

//This page finds locators for the admin related other links pages only. 
//The common functions like logout, change password will directly come from Dashboard

export class AgentDashBoard extends Dashboard //Inherits properties of Dashboard page in here so that we can use it inside it
{
    private readonly cashInLink:Locator
    private readonly paymentLink:Locator
    private readonly selfStatement:Locator
    

    constructor(page: Page) {   
    super(page)             //Commom dashboard features can be used it from here like logout, profile etc
    
    this.cashInLink=page.getByRole("link",{name:"Cash In"})
    this.paymentLink=page.getByRole("link",{name:"Payment"})
    this.selfStatement=page.getByRole("link",{name:"Self Statement"})
    
    
    }

    async goCashIn()
    {await this.cashInLink.click()}

    async goPayment()
    {await this.paymentLink.click()}

    async goselfStatement()
    {await this.selfStatement.click()}
    

} 