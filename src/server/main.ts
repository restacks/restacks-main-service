import * as express from 'express';

import { viewRenderer } from './render';

const argv = require('minimist')(process.argv.slice(2));
const app = express();



app.use(viewRenderer());






app.listen(argv.port || 7000, function(){
    console.log(`Restack launch at port ${argv.port || 7000}`)
})