//@flow
import Hapi from 'hapi';

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
        return reply('hi')
    }
})


server.start((err: any) => {
    if(err) throw err;
    console.log('server is running at:', server.info.uri);
})