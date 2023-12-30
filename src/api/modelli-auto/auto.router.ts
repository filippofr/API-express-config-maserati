import { Router } from "express";
import { find, list } from "./auto.controller";

const router = Router();

router.get('/find-auto', find);
router.get('/list-auto', list);

export default router;