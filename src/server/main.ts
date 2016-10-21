import * as express from 'express';

const argv = require('minimist')(process.argv.slice(2));

const app = express();


app.get('/', function(req, res){
    res.send(200, 'Im healthy');
})




app.listen(argv.port || 7000, function(){
    console.log(`Restack launch at port ${argv.port || 7000}`)
})