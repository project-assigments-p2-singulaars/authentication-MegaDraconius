const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'users.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.db = router.db;
server.use(auth);
server.use(router);

server.listen(3001, () => {
  console.log('JSON Server is running on port 3001');
});