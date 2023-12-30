import { Types } from "mongoose";

export interface OptionalCategory {
    id?: string | Types.ObjectId;
    CategoriaOptionalID: number;
    Nome: string;
}