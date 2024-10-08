import Router from 'koa-router';

import {getJobs} from './handlers/getJobs';

const router = new Router();

router.get('/api/getJobs', ctx => getJobs(ctx));

export default router;
