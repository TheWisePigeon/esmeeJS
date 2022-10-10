/***/ 
export default async function Interpreter(query){
    if (query=="exit") {
        console.log("Bye");
        process.exit(0)
    }
}