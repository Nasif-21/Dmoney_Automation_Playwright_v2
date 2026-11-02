import { Page,Locator } from "@playwright/test";
import { Dashboard } from "../Dashboard";


export class SelfStatement extends Dashboard{
    private readonly btnResetToday:Locator
    private readonly fromDate:Locator
    private readonly toDate:Locator

    constructor(page:Page)
    {
        super(page)
        this.toDate=page.locator('input[type="date"]').nth(1)
        this.fromDate=page.locator('input[type="date"]').nth(0)
        this.btnResetToday=page.getByRole("button",{name:"RESET TO TODAY"})

    }

}