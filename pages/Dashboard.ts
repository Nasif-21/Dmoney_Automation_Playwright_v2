import { Locator, Page,expect } from "@playwright/test";

export class Dashboard {
    protected page:Page  //Making it protected means only class and subClass can use it, no one else form outside 
    private readonly titleProfile: Locator;
    private readonly balance:Locator;
    private readonly menuButton:Locator;
    private readonly menuProfile:Locator;
    private readonly menuChangePass:Locator;
    private readonly menuLogout:Locator;

    constructor(page: Page) {
        this.page=page
        this.titleProfile = page.locator('p.MuiTypography-root.MuiTypography-body1.css-1jamw5g')
        this.balance= page.getByRole("button").filter({ hasText: /Balance|৳/ });
        this.menuButton= page.locator(".MuiBox-root.css-1fdvuei")
        this.menuProfile=page.getByRole("menuitem",{name:"👤 Profile"})
        this.menuChangePass=page.getByRole("menuitem",{name:"🔑 Change Password"})
        this.menuLogout=page.getByRole("menuitem",{name:"🚪 Logout"})
    }

    async getTitleText(): Promise<string> {
        const fullText = (await this.titleProfile.innerText()).trim(); // "Admin Dashboard"
        return fullText.split(/\s+/)[0];                               // "Admin"
    }

    async doLogout()
    {
        await this.menuButton.click();
        await this.page.waitForLoadState();
        await this.menuLogout.click();
    }

    async getBalance(): Promise<string>
    {
        await this.balance.click()
        await expect(this.balance).toHaveText(/৳\s*-?[\d,]+(\.\d+)?/);
        const balanceText=await this.balance.innerText()
        return balanceText.trim() //Return the value of balance inside a profile

    }
}