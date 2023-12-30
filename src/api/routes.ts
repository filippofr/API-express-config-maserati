import { Router } from 'express';
import autoRouter from './modelli-auto/auto.router';
import optionalCatRouter from './optional-category/optional-cat.router';
import optionalRouter from './optionals/optional.router';

const router = Router();

router.use('/auto', autoRouter);
router.use('/optional-cat', optionalCatRouter);
router.use('/optional', optionalRouter);

export default router;