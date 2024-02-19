/*****************************************************************
 * Create new tsoak project.
 * created by Woo Jong Seon, 02/19/2024
 *****************************************************************/

const path = require("path");
const editJsonFile = require("edit-json-file");
const ncp = require("ncp").ncp;
const ora = require("ora");
const chalk = require("chalk");

async function createProject(projectName) {
  let spinner;

  try {
    console.log("[ 1 / 3 ] 🔍  copying project...");
    console.log("[ 2 / 3 ] 🚚  fetching dependencies...");

    await copyProjectFiles(projectName);
    await updatePackageJson(projectName);

    console.log("[ 3 / 3 ] 🔗  linking dependencies...");
    console.log("\u001b[2m──────────────\u001b[22m");

    spinner = ora("Install modules...\n");
    spinner.start();

    spinner.succeed(chalk`{green Complete setup project}`);
  } catch (error) {
    spinner.fail(chalk`{red Please leave this error as an issue}`);
    console.error(error);
  }
}

function copyProjectFiles(destination) {
  const prjFolder = "./default";
  const source = path.join(__dirname, prjFolder);

  return new Promise((resolve, reject) => {
    ncp.limit = 16;
    ncp(source, destination, function (err) {
      if (err) reject(err);
      resolve();
    });
  });
}

async function updatePackageJson(destination) {
  const file = editJsonFile(destination + "/package.json", { autosave: true });

  file.set("name", path.basename(destination));
}

module.exports = createProject;
