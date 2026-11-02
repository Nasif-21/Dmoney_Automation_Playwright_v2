import { Page,Locator } from "@playwright/test";
import { Dashboard } from "../Dashboard";

export class Transaction extends Dashboard{


    constructor(page:Page)
    {
        super(page)
    }
}