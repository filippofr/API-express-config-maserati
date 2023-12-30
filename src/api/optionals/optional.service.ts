import { NotFoundError } from "../../errors/not-found";
import { Optional } from "./optional.entity";
import { OptionalModel } from "./optional.model";

export class OptionalService {

    async list(): Promise<Optional[]> {
        const typeExit = await OptionalModel.find()
            .populate('ModelloID CategoriaOptionalID');

        if (typeExit) {
            return typeExit;
        } else {
            throw new NotFoundError();
        }
    }

    async findById(ModelloID: string): Promise<Optional[]> {
        const optional = await OptionalModel.find({ ModelloID })
            .populate('ModelloID CategoriaOptionalID');

        if (optional) {
            return optional;
        } else {
            throw new NotFoundError();
        }
    }
}

export default new OptionalService();