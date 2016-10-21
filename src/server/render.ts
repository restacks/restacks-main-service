import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import * as Express from 'express';
import { createRoutes } from '../common/routes'; 



export function viewRenderer(router?: Express.Router) {
  if(!router) {
     router = Express.Router();
  }


  router.get('/', function(req, res) {
    // match({routes: createRoutes(store)})
    res.send(renderHTMLLayout('', {}));
  });


  return router;
}


export const renderHTMLLayout = (html, initState) => `
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