import Koa from 'koa';
import serve from 'koa-static';
import cors from '@koa/cors';
import {join} from 'path';

import router from './routes';

const app = new Koa();

if (process.env.NODE_ENV === 'development') {
  console.log('Open CORS in dev mode');
  app.use(cors());
}

app.use(serve(join(__dirname, '../static')));

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server is running on port http://localhost:${process.env.PORT}/`);
});
