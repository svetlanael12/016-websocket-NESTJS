import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { getModelToken } from "@nestjs/mongoose";
import { Book } from "./schemas/book.schemas";

@Module({
    controllers: [BooksController],
    providers: [BooksService, { provide: getModelToken(Book.name), useValue: bookModel }],
    exports: [BooksService]
})
export class BooksModule {}