import { Page,Locator } from "@playwright/test";
import { Dashboard } from "../Dashboard";

//This page finds locators for the admin related other links pages only. 
//The common functions like logout, change password will directly come from Dashboard

export class MerchantDashBoard extends Dashboard //Inherits properties of Dashboard page in here so that we can use it inside it
{
    private readonly cashOutLink:Locator
    private readonly selfStatementLink:Locator
    

    constructor(page: Page) {   
    super(page)             //Commom dashboard features can be used it from here like logout, profile etc
    
    this.cashOutLink=page.getByRole("link",{name:"Cash Out"})
    this.selfStatementLink=page.getByRole("link",{name:"Self Statement"})
   
    }

    async goCashOut()
    {await this.cashOutLink.click()}

    async goSelfStatement()
    {await this.selfStatementLink.click()}

 
} 