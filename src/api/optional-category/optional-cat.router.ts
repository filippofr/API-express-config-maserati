import { Router } from "express";
import { list } from "./optional-cat.controller";

const router = Router();

router.get('/list', list);

export default router;