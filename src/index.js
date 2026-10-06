/* eslint-disable no-console */

'use strict';

import { createServer } from './createServer.js';

createServer().listen(3700, () => {
  console.log('Server is running on localhost:3700');
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
