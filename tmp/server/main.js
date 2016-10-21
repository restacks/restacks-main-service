"use strict";
const express = require('express');
const render_1 = require('./render');
const argv = require('minimist')(process.argv.slice(2));
const app = express();
app.use(render_1.viewRenderer());
app.listen(argv.port || 7000, function () {
    console.log(`Restack launch at port ${argv.port || 7000}`);
});
