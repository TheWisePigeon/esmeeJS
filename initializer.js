import fs from "fs"
import { } from "./constants.js"
/**
 * This function initialize the database
 */
export default async function Initializer() {
    console.log("Welcome to EsmeeDB")
    const rootExists = fs.existsSync(`${process.cwd()}/test`)
    if (rootExists) {
        console.log("Database initialized");
        return
    }
    console.log("Database not initialized");
    console.log("Initializing database......");
    try {
        fs.mkdirSync(`${process.cwd()}\\test`)
    } catch (error) {
        console.error(error);
        process.exit(1)
    }


}