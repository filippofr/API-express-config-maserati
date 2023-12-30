import { NextFunction, Request, Response } from "express";
import autoModelService from "./optional-cat.service";
import { forEach } from "lodash";


export const list = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {  
    try {
        const catList = await autoModelService.list();
        res.json(catList);
    } catch(err) {
        next(err);
    }
}