import { Page } from "@playwright/test";
import fs from "fs"
import path from "path";

//Define the file directory of json with folder.
const auth_file=path.resolve(__dirname,"../resources/localstorage.json")

export function generateRandomNumber(min:number, max:number):number
{
    const randomNum=Math.random()*(max-min)+min;
    return Math.floor(randomNum)

}



//Getting token from the localstorage and push inside browser
export  function getAuth(): string |undefined
{
    if(!fs.existsSync(auth_file))
    return undefined

    const data= JSON.parse(fs.readFileSync(auth_file,"utf-8"));
    return data.token
}


// In this function, after login, we will hunt down token inside browser Local Storage
// Then write down token into our json file. 
// If the localstorage.json file doesn't exist, it will create one
// So, in coding, first we solve the issue of missing file
// Then write token inside json
export async function setAuth(page:Page, storageKey="token"):Promise<string>
{
    await page.waitForFunction((key)=>!!localStorage.getItem(key),storageKey)
    const token=await page.evaluate((key)=>localStorage.getItem(key),storageKey)

    if(!token)
    {
        throw new Error(`No ${storageKey} found in localStorage`)

    }

    fs.mkdirSync(path.dirname(auth_file),{recursive:true})
    fs.writeFileSync(auth_file,JSON.stringify({token},null,2))
    return token
}