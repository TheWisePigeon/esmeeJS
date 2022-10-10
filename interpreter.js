import { DOCS } from "./constants.js"
import { createBranch, createTree, createLeaf, removeTree } from "./utils.js"

/**
 * @param {string} query 
 * @returns 
 */
export default async function Interpreter(query) {
    query = query.trim()
    let commands = query.split(" ")
    let degree = query.split(" ").length

    if (degree == 1) {
        if (query == "exit") {
            console.log("Bye");
            process.exit(0)
        }

        if (query == "help") {
            console.log(DOCS);
            return
        }
    }

    if (degree==2) {
        switch (commands[0]) {
            case "uproot":
                removeTree(commands[1])
                return;
        
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
                        console.log("Invalid query");
                        return
                }
                

            
            default:
                break
        }
    }

    console.log("Unknown query");
}