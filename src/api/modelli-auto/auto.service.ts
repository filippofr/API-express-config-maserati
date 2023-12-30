import { Model, Types } from "mongoose";
import { NotFoundError } from "../../errors/not-found";
import { Auto } from "./auto.entity";
import { AutoModel } from "./auto.model";

export class  AutoModelService {

    async findAuto(modelId: string | Types.ObjectId): Promise<Auto> {
        const typeExit = await AutoModel.findById(modelId);
        if(typeExit) {
            return typeExit;
        } else {
            throw new NotFoundError();
        }
    }
    async listAuto(): Promise<Auto[]> {
        const typeExit = await AutoModel.find();
        if(typeExit) {
            return typeExit;
        } else {
            throw new NotFoundError();
        }
    }
}

export default new AutoModelService();