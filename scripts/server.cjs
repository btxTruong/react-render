const path = require('node:path');
const http = require('node:http');
const handler = require('serve-handler');

const PORT = 5890;

const distPath = path.join(__dirname, '..', 'dist');

const server = http.createServer(async (req, res) => {
  await handler(req, res, {
    public: distPath,
    directoryListing: false,
    rewrites: [{source: '**', destination: '/index.html'}],
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`==> PORT: ${PORT}`);
});
