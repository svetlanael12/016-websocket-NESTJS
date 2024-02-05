import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';

@Schema()
export class Book {
    @Prop({ required: true })
    public title: string;

    @Prop()
    public description: string;

    @Prop()
    public authors: string;

    @Prop()
    public favorite: string;

    @Prop()
    public fileCover: string;

    @Prop()
    public fileName: string;

    @Prop()
    public fileBook: string;
}

export const TodoSchema = SchemaFactory.createForClass(Book);