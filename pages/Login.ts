import { Locator, Page } from "@playwright/test";
import { readJsonData } from "../utils/utils";

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

    async doSysetmLogin()
    {
        const systemEmail=process.env.systemEmail
        const systemPass=process.env.systemPass

        if(!systemEmail||!systemPass)
        {
            throw new Error("No system username or password found")
        }
        await this.txtEmail.fill(systemEmail)
        await this.txtPass.fill(systemPass)
        await this.btnLogin.click()

    }

    async doUserLogin()
    {
        const userName=readJsonData().Email
        const userPass=readJsonData().Password

        if(!userName ||!userPass)
        {
            throw new Error("No username or password found")
        }

        await this.txtEmail.fill(userName)
        await this.txtPass.fill(userPass)
        await this.btnLogin.click()

    }


}