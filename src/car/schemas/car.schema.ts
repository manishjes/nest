import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "../../auth/schemas/user.schema";
import mongoose from "mongoose";



@Schema({
    timestamps: true
})

export class Car {


    @Prop()
    carname: string

    @Prop()
    description: string

    @Prop()
    qty: Number

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    user: User

}
export const CarSchema = SchemaFactory.createForClass(Car) 