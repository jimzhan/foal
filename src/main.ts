import 'source-map-support/register';
import * as http from 'http';
import { Config, createApp } from '@foal/core';

import { AppController } from './apps';

async function main() {
  const app = await createApp(AppController);

  const server = http.createServer(app);
  const port = Config.get('port', 'number');
  server.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
}

main()
  .catch(err => { console.error(err); process.exit(1); });