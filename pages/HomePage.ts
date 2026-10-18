import { Locator, Page } from "@playwright/test";

export class HomePage{

    //Providing locator info inside class. Its a typescript code for identify
    // locator. Its private means its can be used only inside this class

    private readonly loginLink:Locator
    private readonly signUpLink:Locator

    constructor(private page:Page){
      //Identify the locators type 
      this.loginLink=page.getByRole("link",{name:"Login",exact:true}).first()
      this.signUpLink=page.getByRole("link",{name:"Sign Up"})
    }

    //Functions to interact with the locators 

    async clickLogin()
    {
        await this.loginLink.click()
    }

    async clickSignUp()
    {
        await this.signUpLink.click()
    }

    

}