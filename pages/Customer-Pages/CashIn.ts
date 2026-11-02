import { Page,Locator } from "@playwright/test";
import { Dashboard } from "../Dashboard";

export class CashIn extends Dashboard
{
    private readonly amountTxt:Locator
    private readonly btnContinuePayment:Locator
    private readonly txtCardNumber:Locator
    private readonly txtCardDate:Locator
    private readonly txtCardCvc:Locator
    private readonly btnPay:Locator
    private readonly btnBack:Locator


    constructor(page:Page)
    {
        super(page)
        this.amountTxt=page.getByRole("spinbutton",{name:"Amount (BDT)"})
        this.btnContinuePayment=page.getByRole("button",{name:"CONTINUE TO PAYMENT"})

        const cardFrame = page.frameLocator('iframe[title="Secure card payment input frame"]');
        this.txtCardNumber=cardFrame.locator('input[name="cardnumber"]');
        this.txtCardDate=cardFrame.locator('input[name="exp-date"]');
        this.txtCardCvc=cardFrame.locator('input[name="cvc"]');
        
        this.btnBack=page.getByRole("button",{name:"← BACK"})
        this.btnPay=page.locator('button[type="Submit"]')
    }
}