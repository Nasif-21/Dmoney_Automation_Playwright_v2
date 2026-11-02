import { Page,Locator } from "@playwright/test";
import { Dashboard } from "../Dashboard";
import { UserModel } from "../../model/userModel";

export class CreateUser extends Dashboard{

    private readonly nameTxt:Locator
    private readonly emailTxt:Locator
    private readonly password:Locator
    private readonly phoneNumber:Locator
    private readonly nid:Locator
    private readonly roleDropDown:Locator
    private readonly roleListBox:Locator
    private readonly btnCreateUser:Locator
    private readonly btnCancel:Locator

    constructor(page:Page)
    {
        super(page)
        this.nameTxt=page.getByRole("textbox",{name:"Name"})
        this.emailTxt=page.getByRole("textbox",{name:"Email"})
        this.password=page.getByRole("textbox",{name:"Password"})
        this.phoneNumber=page.getByRole("textbox",{name:"Phone Number"})
        this.nid=page.getByRole("textbox",{name:"NID"})
        this.roleDropDown=page.getByRole("combobox")
        this.roleListBox=page.getByRole("option")
        this.btnCreateUser=page.getByRole("button",{name:"CREATE USER"})
        this.btnCancel=page.getByRole("button",{name:"CANCEL"})

    }

    async createNewAgentUser(userModel:UserModel)
    {
        await this.nameTxt.fill(userModel.Name);
        await this.emailTxt.fill(userModel.Email)
        await this.password.fill(userModel.Password)
        await this.phoneNumber.fill(userModel.Phone_Number)
        await this.nid.fill(userModel.NID)
        await this.roleDropDown.click()
        await this.page.waitForLoadState()
        await this.roleListBox.nth(1).click()
        await this.btnCreateUser.click();
    }

    async createNewCustomerUser(userModel:UserModel)
    {
        await this.nameTxt.fill(userModel.Name);
        await this.emailTxt.fill(userModel.Email)
        await this.password.fill(userModel.Password)
        await this.phoneNumber.fill(userModel.Phone_Number)
        await this.nid.fill(userModel.NID)
        await this.roleDropDown.click()
        await this.page.waitForLoadState()
        await this.roleListBox.nth(2).click()
        await this.btnCreateUser.click();
    }

    async createNewMerchantUser(userModel:UserModel)
    { 
        await this.nameTxt.fill(userModel.Name);
        await this.emailTxt.fill(userModel.Email)
        await this.password.fill(userModel.Password)
        await this.phoneNumber.fill(userModel.Phone_Number)
        await this.nid.fill(userModel.NID)
        await this.roleDropDown.click()
        await this.page.waitForLoadState()
        await this.roleListBox.nth(3).click()
        await this.btnCreateUser.click();}
}