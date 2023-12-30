import mongoose, { Schema } from "mongoose";
import { Auto } from "./auto.entity";

const AutoModelSchema = new Schema<Auto>({
    ModelloID: Number,
    Nome: String,
    PrezzoBase: String,
    FileImageSfondo: String
})

AutoModelSchema.set('toJSON', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        return ret;
    }
})

AutoModelSchema.set('toObject', {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
        return ret;
    }
})

export const AutoModel = mongoose.model<Auto>('modelli-auto', AutoModelSchema);