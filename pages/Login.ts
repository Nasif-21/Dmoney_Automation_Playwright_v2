import { Locator, Page } from "@playwright/test";

export class Login{
     private readonly txtEmail:Locator
     private readonly txtPass:Locator
     private readonly btnLogin:Locator
     private readonly linkForgetPass:Locator

    constructor(private page:Page)
    {
        this.txtEmail=page.getByRole("textbox",{name:"Email or Phone Number"})
        this.txtPass=page.getByRole("textbox",{name:"Password"})
        this.btnLogin=page.getByRole("button",{name:"Login →"})
        this.linkForgetPass=page.getByText("Forget password ?")

    }

    async doAdminLogin()
    {  
        const adminEmail=process.env.adminEmail
        const adminPass=process.env.adminPass

        if(!adminEmail||!adminPass)
        {
            throw new Error("No Admin email or password is saved in env")
        }

        await this.txtEmail.fill(adminEmail)
        await this.txtPass.fill(adminPass)
        await this.btnLogin.click();

    }

    async doLogin()
    {

    }


}