import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    public firstName: string;

    @Prop()
    public lastName: string;
}

export const UserSchema = SchemaFactory.createForClass(User);