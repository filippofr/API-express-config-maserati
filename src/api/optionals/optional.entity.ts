import { Types } from "mongoose";
import { Auto } from "../modelli-auto/auto.entity";
import { OptionalCategory } from "../optional-category/optional-cat.entity";

export interface Optional {
    id?: string | Types.ObjectId;
    OptionalID: number;
    ModelloID: string | Types.ObjectId | Auto;
    CategoriaOptionalID: string | Types.ObjectId | OptionalCategory;
    Nome: string;
    Prezzo: number;
    FileImage: string;
    Predefinito : boolean;
}