import { Injectable } from '@nestjs/common'
import { BookInterface } from 'src/books/interfaces/book.interface'
import { InjectModel } from "@nestjs/mongoose";
import { Book } from "./schemas/book.schemas";
import { Model } from "mongoose";
import { CreateBooksDto } from "./dto/create-books.dto";

@Injectable()
export class BooksService {
    constructor(@InjectModel(Book.name, 'books') private bookModel: Model<Book>) {}

    private readonly books: BookInterface[] = []

    getBooks(): BookInterface[] {
        return this.books
    }
    async create(CreateBooksDto: CreateBooksDto): Promise<Book> {
        const createdBook = new this.bookModel(CreateBooksDto);
        return createdBook.save();
    }

    async findAll(): Promise<Book[]> {
        return this.bookModel.find().exec();
    }
}