//@flow
import Hapi from 'hapi';
import { graphqlHapi, graphiqlHapi } from 'graphql-server-hapi';
import { makeExecutableSchema } from 'graphql-tools';

import Schema from './api/schema';
import Resolver from './api/resolvers';


import Repository from './api/models/repository';

console.log('Start sevrer')

const server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: 3000,
});



server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
        return reply('hi');
    }
});



server.register({
    register: graphiqlHapi,
    options: {
        path: '/graphiql',
        graphiqlOptions: {
            endpointURL: '/graphql',
        },
    },
});

server.register({
    register: graphqlHapi,
    options: {
        path: '/graphql',
        graphqlOptions: {
            schema: makeExecutableSchema({
                typeDefs: Schema,
                resolvers: Resolver
            }),
            context: {
              Repository: new Repository()
            }
        },
    },
});


server.start((err: any) => {
    if (err) throw err;
    console.log('server is running at:', server.info.uri);
})