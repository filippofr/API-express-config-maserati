import { Types } from "mongoose";

export interface Auto {
    id?: string | Types.ObjectId;
    ModelloID: number;
    Nome: string;
    PrezzoBase: string;
    FileImageSfondo: string;
}