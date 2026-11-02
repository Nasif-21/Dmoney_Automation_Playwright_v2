import { Page,Locator } from "@playwright/test";
import { Dashboard } from "../Dashboard";


export class SendMoney extends Dashboard{
    private readonly txtReceiverPhn:Locator
    private readonly txtAmount:Locator
    private readonly btnSendMoney:Locator

    constructor(page:Page)
    {
        super(page)
        this.txtReceiverPhn=page.getByRole("textbox",{name:"Receiver Phone Number"})
        this.txtAmount=page.getByRole("spinbutton",{name:"Amount (BDT)"})
        this.btnSendMoney=page.getByRole("button",{name:"Send Money →"})

    }

}