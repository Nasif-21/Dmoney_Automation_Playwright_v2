import { Page,Locator } from "@playwright/test";
import { Dashboard } from "../Dashboard";

export class Transaction extends Dashboard{

    //private readonly userTable:Locator
    // private readonly id:Locator
    // private readonly name:Locator
    // private readonly email:Locator
    // private readonly status:Locator
    // private readonly 


    constructor(page:Page)
    {
        super(page)
        const userTable=page.locator("table")
        const rows=userTable.locator("tbody tr")

        //this.name=rows.locator()
    }
}