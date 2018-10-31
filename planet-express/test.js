const { FactomCli } = require('factom');
 
// Default factomd connection to localhost:8088
// and walletd connection to localhost:8089
const cli = new FactomCli();
 
// You can override factomd connection parameters and retry strategy
const cli = new FactomCli({
    host: '52.202.51.228',
    port: 8088,
    path: '/v2', // Path to V2 API. Default to /v2
    debugPath: '/debug', // Path to debug API. Default to /debug
    user: 'paul', // RPC basic authentication
    password: 'pwd',
    protocol: 'http', // http or https. Default to http
    rejectUnauthorized: true, // Set to false to allow connection to a node with a self-signed certificate
    retry: {
        retries: 4,
        factor: 2,
        minTimeout: 500,
        maxTimeout: 2000
    }
});
 
// You can also override both factomd and walletd options
const cli = new FactomCli({
    factomd: {
        host: '52.202.51.228',
        port: 8088
    },
    walletd: {
        host: '52.202.51.228',
        port: 8089
    }
});