import { Page,Locator } from "@playwright/test";
import { Dashboard } from "../Dashboard";


export class CashIn extends Dashboard{
    private readonly txtCustomerphn:Locator
    private readonly txtAmount:Locator
    private readonly btnCashIn:Locator

    constructor(page:Page)
    {
        super(page)
        this.txtCustomerphn=page.getByRole("textbox",{name:"Customer Phone Number"})
        this.txtAmount=page.getByRole("spinbutton",{name:"Amount (BDT)"})
        this.btnCashIn=page.getByRole("button",{name:"Cash In →"})

    }

}