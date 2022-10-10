import { ROOT_DIR } from "./constants.js"
import fs from "fs"
import inquirer from "inquirer";

/**
 * @param {string} name
 */
function createTree(name) {
    if (fs.existsSync(`${ROOT_DIR}\\${name}`)) {
        console.log("Can't create existing tree");
        return
    }
    try {
        fs.mkdirSync(`${ROOT_DIR}\\${name}`)
        console.log(`Tree ${name} planted :)`);
    } catch (error) {
        console.log("Something went wrong");
        process.exit(1)
    }
}

/**
 * @param {string} name 
 */
async function removeTree(name) {
    if (!fs.existsSync(`${ROOT_DIR}\\${name}`)) {
        console.log("Can't delete non existing tree");
        return
    }
    try {
        fs.rmdirSync(`${ROOT_DIR}\\${name}`, {
            force: true
        })
        console.log(`Tree ${name} removed `);
    } catch (error) {
        console.log("Something went wrong");
        process.exit(1)
    }

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
    removeTree
}