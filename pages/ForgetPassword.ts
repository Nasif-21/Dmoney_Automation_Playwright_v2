import { Locator,Page } from "@playwright/test";

export class ForgetPassword{

    private readonly emailtxtBox:Locator
    private readonly btnSendResetLink:Locator

    constructor(private page:Page){
    this.emailtxtBox=page.getByPlaceholder("Email or Phone Number")
    this.btnSendResetLink=page.getByRole("button",{name:"Send Reset Link →"})
    }

    async getResetLink()
    {
        await this.emailtxtBox.fill("dummyEmail@dummy.com")
        await this.btnSendResetLink.click()
    }
}
