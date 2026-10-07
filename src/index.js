/* eslint-disable no-console */

'use strict';

const { createServer } = require('./createServer');

createServer().listen(3700, () => {
  console.log('Server is running on localhost:3700');
});
