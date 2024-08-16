import Koa from 'koa';

import router from './routes';

const app = new Koa();

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server is running on port http://localhost:${process.env.PORT}/`);
});
