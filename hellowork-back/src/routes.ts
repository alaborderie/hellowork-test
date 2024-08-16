import Router from 'koa-router';

import {getJobs} from './handlers/getJobs';

const router = new Router();

router.get('/getJobs', ctx => getJobs(ctx.request.query));

export default router;
