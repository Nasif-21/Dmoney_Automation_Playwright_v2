import { Page,Locator } from "@playwright/test";
import { Dashboard } from "../Dashboard";


export class Payment extends Dashboard{
    private readonly txtCMerchantphn:Locator
    private readonly txtAmount:Locator
    private readonly btnMakePayment:Locator

    constructor(page:Page)
    {
        super(page)
        this.txtCMerchantphn=page.getByRole("textbox",{name:"Merchant Phone Number"})
        this.txtAmount=page.getByRole("spinbutton",{name:"Amount (BDT)"})
        this.btnMakePayment=page.getByRole("button",{name:"Make Payment →"})

    }

}