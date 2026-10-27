/* eslint-disable no-console */

'use strict';

const { createServer } = require('./createServer.js');

createServer().listen(7080, () => {
  console.log('Server is running on localhost:7080');
});

// function cleanUp() {
//   server.close(async () => {
//     await db.end();

//     process.exit(0);
//   });
// }

// process.on('SIGTERM', cleanUp);
// process.on('SIGINT', cleanUp);

// process.on('unhandledRejection', (err) => {
//   console.error(err);
//   cleanUp();
// });

// process.on('uncaughtException', (err) => {
//   console.error(err);
//   cleanUp();
// });
