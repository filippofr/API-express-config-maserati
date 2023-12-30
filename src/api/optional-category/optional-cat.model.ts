import mongoose, { Schema } from "mongoose";
import { OptionalCategory } from "./optional-cat.entity";

const OptionalCategorySchema = new Schema<OptionalCategory>({
    CategoriaOptionalID: Number,
    Nome: String,
})

OptionalCategorySchema.set('toJSON', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        return ret;
    }
})

OptionalCategorySchema.set('toObject', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        return ret;
    }
})

export const OptionalCategoryModel = mongoose.model<OptionalCategory>('optional-category', OptionalCategorySchema);