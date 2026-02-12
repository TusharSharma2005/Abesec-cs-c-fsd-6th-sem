import fs from 'fs';
const readdirSync = (path) => {
    try {
        const files = fs.readdirSync(path);
        console.log(files);
    } catch (error) {
        console.log("Unable to read directory");
    }
}
readdirSync("../day2");


const senddirSync = (path) => {
    try {
        const files = fs.readdirSync(path, { withFileTypes: true });
        files.forEach((file) => {
            if (file.isDirectory()) {   
                console.log(`Directory: ${file.name}`);
            } else if (file.isFile()) {
                console.log(`File: ${file.name}`);
            }
        });
    } catch (error) {
        console.log("Unable to read directory");
    }   
}
senddirSync("../day2");



const mkdirSync = (path) => {
    try {
        fs.mkdirSync(path);
        console.log("Directory created successfully.");
    } catch (error) {
        console.log("Unable to create directory");
    }
}
mkdirSync("../day6");
