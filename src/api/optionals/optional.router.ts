import { Router } from "express";
import { findOptionalAuto, list } from "./optional.controller";

const router = Router();

router.get('/list', list);
router.get('/findByAuto', findOptionalAuto);

export default router;