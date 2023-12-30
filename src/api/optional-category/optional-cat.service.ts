import { Model, Types } from "mongoose";
import { NotFoundError } from "../../errors/not-found";
import { OptionalCategory } from "./optional-cat.entity";
import { OptionalCategoryModel } from "./optional-cat.model";

export class  OptionalCategoryService {

    async list(): Promise<OptionalCategory[]> {
        const typeExit = await OptionalCategoryModel.find();
        if(typeExit) {
            return typeExit;
        } else {
            throw new NotFoundError();
        }
    }
}

export default new OptionalCategoryService();