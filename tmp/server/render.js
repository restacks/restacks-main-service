"use strict";
const Express = require('express');
function viewRenderer(router) {
    if (!router) {
        router = Express.Router();
    }
    router.get('/', function (req, res) {
        res.send(exports.renderHTMLLayout('', {}));
    });
    return router;
}
exports.viewRenderer = viewRenderer;
exports.renderHTMLLayout = (html, initState) => `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8">
              <link rel="icon" href="data:;base64,iVBORwOKGO=">
              <title>Restack.io</title>
              <style>.init{ opacity:0} </style>
            </head>
            <body>
            <script>
              window.__INITIAL_STATE__ = ${JSON.stringify(initState)}
            </script>
            <script type="application/javascript" src="/dist/client.js"></script>
            </body>
          </html>
`;
