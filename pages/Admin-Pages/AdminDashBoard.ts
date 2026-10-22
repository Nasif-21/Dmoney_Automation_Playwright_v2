import { Page,Locator } from "@playwright/test";
import { Dashboard } from "../Dashboard";

//This page finds locators for the admin related other links pages only. 
//The common functions like logout, change password will directly come from Dashboard

export class AdminDashBoard extends Dashboard //Inherits properties of Dashboard page in here so that we can use it inside it
{
    private readonly createUserLink:Locator
    private readonly depositLink:Locator
    private readonly transactionLink:Locator
    private readonly userListLink:Locator

    constructor(page: Page) {   
    super(page)             //Commom dashboard features can be used it from here like logout, profile etc
    
    this.createUserLink=page.getByRole("link",{name:"Create User"})
    this.depositLink=page.getByRole("link",{name:"Deposit (SYSTEM)"})
    this.transactionLink=page.getByRole("link",{name:"Transaction List"})
    this.userListLink=page.getByRole("link",{name:"User List"}) 
    }

    async goCreateUser()
    {await this.createUserLink.click()}

    async goDeposit()
    {await this.depositLink.click()}

    async goTransaction()
    {await this.transactionLink.click()}
    
    async goUserList()
    {await this.userListLink.click()}

} 