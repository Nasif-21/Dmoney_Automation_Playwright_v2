import { Page,Locator } from "@playwright/test";
import { Dashboard } from "../Dashboard";


export class Cashout extends Dashboard{
    private readonly txtAgentphn:Locator
    private readonly txtAmount:Locator
    private readonly btnCashOut:Locator

    constructor(page:Page)
    {
        super(page)
        this.txtAgentphn=page.getByRole("textbox",{name:"Agent Phone Number"})
        this.txtAmount=page.getByRole("spinbutton",{name:"Amount (BDT)"})
        this.btnCashOut=page.getByRole("button",{name:"Cash Out →"})

    }

}