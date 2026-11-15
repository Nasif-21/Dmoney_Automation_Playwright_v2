import { Page,Locator } from "@playwright/test";
import { Dashboard } from "../Dashboard";
import { readJsonData } from "../../utils/utils";


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

    async doDeposit()
    {
        const userPhn=readJsonData().Phone_Number
        const amount=process.env.agent_balance_load

        if(!userPhn||!amount)
        {
            throw new Error("User amount or balance not found")
        }

        await this.txtCustomerphn.fill(userPhn)
        await this.txtAmount.fill(amount)
        await this.btnCashIn.click()


    }

}