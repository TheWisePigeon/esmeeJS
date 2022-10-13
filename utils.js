import { ROOT_DIR } from "./constants.js"
import fs from "fs"
import { log } from "console";

/**
 * @param {string} name
 */
function createTree(name) {
    if (fs.existsSync(`${ROOT_DIR}\\${name}`)) {
        log("Can't create existing tree");
        return
    }
    try {
        fs.mkdirSync(`${ROOT_DIR}\\${name}`)
        log(`Tree ${name} planted :)`);
    } catch (error) {
        log("Something went wrong");
        process.exit(1)
    }
}

/**
 * @param {string} name 
 */
async function removeTree(name) {
    if (!fs.existsSync(`${ROOT_DIR}\\${name}`)) {
        log("Can't delete non existing tree");
        return
    }
    try {
        fs.rmdirSync(`${ROOT_DIR}\\${name}`, {
            force: true
        })
        log(`Tree ${name} removed `);
    } catch (error) {
        log("Something went wrong");
        process.exit(1)
    }

}

/**
 * @param {string} name
 * @returns { boolean | void }
 */
function  climbTree(name){
    if(! fs.existsSync(`${process.cwd()}\\${name}`) ){
        log("Can't climb inexisting tree")
        return false
    }
    return true
}

/**
 * @param {string} name
 * @param {string} tree
 */
function createBranch(name, tree) {

}

/**
 * @param {string} name 
 */
function createLeaf(name) {

}



export {
    createTree,
    createBranch,
    createLeaf,
    removeTree,
    climbTree
}