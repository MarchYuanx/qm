const Hapi = require('hapi');
const server = new Hapi.Server();
const routesHelloHapi = require('./routes/hello-hapi');
const routesShops = require('./routes/shops');
const config = require('./config');
const pluginHapiSwagger = require('./plugins/hapi-swagger');

require('env2')('./.env');

server.connection({
  port: config.port,
  host: config.host
});

const init = async () => {
  // server.route([
  //   {
  //     method: 'GET',
  //     path: '/',
  //     handler: (request, reply) => {
  //       reply('hello api')
  //     }
  //   }
  // ]);
  await server.register([
    ...pluginHapiSwagger
  ]);
  server.route([...routesHelloHapi, ...routesShops]);

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

init();