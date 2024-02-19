#!/usr/bin/env node

/*****************************************************************
 * Create new tsoak project.
 * created by Lim Kyungmin, 01/02/2020
 *****************************************************************/

const path = require("path");
const starter = require("../lib/starter");
const destination = getDest(process.argv[2]);
//hhhh
function getDest(destFolder) {
  destFolder = destFolder || "tsoak";
  return path.join(process.cwd(), destFolder);
}

starter(destination);
