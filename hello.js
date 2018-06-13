#!/usr/bin/env node

const os = require("os");
const name = os.userInfo().username;

console.log(`Hello ${name}!`);

