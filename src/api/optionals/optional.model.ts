import mongoose, { Schema, Types } from "mongoose";
import { Optional } from "./optional.entity";

const OptionalSchema = new Schema<Optional>({
    OptionalID: Number,
    ModelloID: { type: Schema.Types.ObjectId, ref: 'modelli-auto' },
    CategoriaOptionalID: { type: Schema.Types.ObjectId, ref: 'optional-category' },
    Nome: String,
    Prezzo: Number,
    FileImage: String,
    Predefinito: Boolean,
})

OptionalSchema.set('toJSON', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        return ret;
    }
})

OptionalSchema.set('toObject', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        return ret;
    }
})

export const OptionalModel = mongoose.model<Optional>('optional', OptionalSchema);