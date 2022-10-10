import inquirer from "inquirer";
import Interpreter from "./interpreter.js";

export default async function Engine() {
    let query = await getQuery()
    Interpreter(query)
}

async function getQuery(){
    const query = await inquirer.prompt({
        name:"query",
        type:"input",
        prefix: ">"
    })

    return query.query
}