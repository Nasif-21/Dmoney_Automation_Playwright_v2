import { Page,Locator, expect } from "@playwright/test";
import { Dashboard } from "../Dashboard";
import { readJsonData } from "../../utils/utils";

export class UserList extends Dashboard{

     private readonly userTable:Locator
     private readonly rows:Locator 
     private readonly editbtn:Locator
     private readonly backbtn:Locator
     private readonly btnSave:Locator
     private readonly btncnl:Locator
     private readonly statusCombo:Locator
     private readonly statusOptAct:Locator
     private readonly statusOptPend:Locator
     private readonly statusOptSus:Locator


    constructor(page:Page)
    {
        super(page)
        this.userTable=page.locator("table")
        this.rows=this.userTable.locator("tbody tr")
        this.editbtn=page.getByRole("button",{name:"Edit User"})
        this.backbtn=page.getByRole("button",{name:"Back to User List"})
        this.btnSave=page.getByRole("button",{name:"Save Changes"})
        this.btncnl=page.getByRole("button",{name:"Cancel"})
        this.statusCombo=page.getByRole("combobox").filter({hasText:/^(Pending|Active|Suspended)$/})
        this.statusOptAct=page.getByRole("option",{name:"Active"})
        this.statusOptPend=page.getByRole("option",{name:"Pending"})
        this.statusOptSus=page.getByRole("option",{name:"Suspended"})


    }

    // Returning the current user row name, so that, I don't have to repeat myself for 
    // same user logic multiple times

    private async getCurrentUser():Promise<Locator>
    {
        const userList=readJsonData()
        const tableRow=this.rows.filter({
            hasText:userList.Email
        })
        
        await expect(tableRow).toBeVisible({
        timeout: 10000
        });

        await expect(tableRow).toHaveCount(1)

        return tableRow
    }
    
    
    async checkUserCreateStatus()
    {  
        const status=await this.getCurrentUser()
        await expect(status).toContainText("PENDING")

    }

    //Go to the user I need to update
    //Click on view from table
    //Click on edit
    // Make status Pending to Active
    //Click save

    async activeUserStatus()
    {
        const selectUser=await this.getCurrentUser()
        await selectUser.getByRole("button",{name:"VIEW"}).click()
        await this.editbtn.click();
        await this.statusCombo.click()
        await expect(this.statusOptAct).toBeVisible()
        await this.statusOptAct.click()
        await this.btnSave.click()
        await this.backbtn.click()

    }

       async checkUserActiveStatus()
    {  
        const status=await this.getCurrentUser()
        await expect(status).toContainText("ACTIVE")

    }
    
}