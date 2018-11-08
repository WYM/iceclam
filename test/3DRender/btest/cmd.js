//node cmd.js --path webgl
const argv = require('yargs').argv;
const exec = require('child_process').exec;
const path = argv.path;

async function execSync(cmd){
    return new Promise((resolve)=>{
        exec(cmd,function (error) {
            if(error){
                throw error;
            }
            resolve();
        }) 
    });
}

async function run() {
    await execSync(`wasm-pack build ./examples/${path}/`);
    console.log("build complete");

    await execSync(`webpack --path:../examples/${path}/pkg/`);
    console.log("webpack build complete");

    await execSync('start chrome http://localhost:8080')
    console.log("webpack serve chrome");

    await execSync(`npm run serve`);
}

run();