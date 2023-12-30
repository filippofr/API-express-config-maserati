import { NextFunction, Request, Response } from "express";
import optionalService from "./optional.service";
import { forEach } from "lodash";


export const list = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {  
    try {
        const catList = await optionalService.list();
        res.json(catList);
    } catch(err) {
        next(err);
    }
}

export const findOptionalAuto = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {  
    try {
        const { id } = req.query;
        const optionalList = await optionalService.findById(id as string);
        res.json(optionalList);
    } catch(err) {
        next(err);
    }
}