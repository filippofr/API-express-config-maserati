import { NextFunction, Request, Response } from "express";
import autoModelService from "./auto.service";


export const find = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {  
    try {
        const { id } = req.query;
        const auto = await autoModelService.findAuto(id as string);
        res.json(auto);
    } catch(err) {
        next(err);
    }
}

export const list = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {  
    try {
        const autos = await autoModelService.listAuto();
        res.json(autos);
    } catch(err) {
        next(err);
    }
}