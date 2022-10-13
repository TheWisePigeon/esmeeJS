import inquirer from "inquirer";
import Interpreter from "./interpreter.js";
import { log } from "console"

/**
 * @type {string}
 */
let root = ""

export default async function Engine() {
    let query = await getQuery()
    let response = await Interpreter(query)

    if(response[0]=="climb"){
        root+=`${response[1]}#`
    }
}

async function getQuery(){
    const query = await inquirer.prompt({
        name:"query",
        type:"input",
        prefix: root
    })

    return query.query
}