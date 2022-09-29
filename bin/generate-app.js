#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

if (process.argv.length < 3) {
    console.log('You have to provide a name to your app.');
    console.log('For example :');
    console.log('npx create-next-express {FOLDER_NAME}');
    process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const git_repo = "https://github.com/juhwannn/next-express-boilerplate";

try {
    fs.mkdirSync(projectPath);
} catch (err) {
    if (err.code === 'EEXIST') {
        console.log(`The file ${projectName} already exist in the current directory, please give it another name.`);
    } else {
        console.log(error);
    }
    process.exit(1);
}

async function main() {
    try {
        console.log("@@@");

        console.log('Downloading files...');
        execSync(`git clone --depth 1 ${git_repo} ${projectPath}`);

        process.chdir(projectPath);

        console.log("Installing dependencies...");
        execSync('npm install');

        console.log("Removing useless files");
        execSync('rm -rf ./.git');
        fs.rmdirSync(path.join(projectPath, 'bin'), { recursive: true});

        console.log("Changing the package.json file");
        fs.readFile("./package.json", "utf-8", (err, data) => {
            if (err) {
                throw err;
            }

            delete data.name;
            delete data.description;
            delete data.author;
            delete data.bin;
            delete data.keywords;
            delete data.license;
            data.name = projectName;
            data.version = "0.0.0";

            console.log("package.json data : ");
            console.log(data);

            fs.writeFile("./package.json", data, "utf-8", (err) => {
                if (err) {
                    throw err;
                }
            });
        });


        console.log("The installation is done, this is ready to use !");

    } catch (error) {
        console.log(error);
    }
}


main();
