// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('games_data.json'); // file dữ liệu JSON
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
const PORT = process.env.PORT || 8080 ;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
