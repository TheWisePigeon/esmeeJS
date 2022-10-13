import { DOCS } from "./constants.js"
import { createBranch, createTree, createLeaf, removeTree, climbTree } from "./utils.js"
import { log, table } from "console"

/**
 * @type {string}
 */
let root = ""

/**
 * @param {string} query 
 * @returns {Promise<boolean> | Promise<string> | Promise<void> }
 */
export default async function Interpreter(query) {
    query = query.trim()
    let commands = query.split(" ")
    let degree = query.split(" ").length

    if (degree == 1) {
        if (query == "exit") {
            log("Bye");
            process.exit(0)
        }

        if (query == "help") {
            log(DOCS);
            return
        }
    }

    if (degree==2) {
        switch (commands[0]) {
            case "uproot":
                removeTree(commands[1])
                return;
            
            case "climb":
                let result = climbTree(commands[1])
                log(result)
                if(!result){
                    return[false]
                }
                root=`${commands[1]}`
                return ["climb", commands[1]]
            default:
                return;
        }
    }

    if (degree == 3) {

        switch (commands[0]) {

            case "create":

                switch (commands[1]) {
                    case "tree":
                        createTree(commands[2])
                        return
                
                    default:
                        log("Invalid query");
                        return
                }
                

            
            default:
                break
        }
    }

    log("Unknown query");
}