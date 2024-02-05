import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookComments, BookCommentsDocument } from './BookCommentsSchema';
import { BookCommentsDto } from './dto/BookCommentDto';

@Injectable()
export class BookCommentsService {
    constructor(
        @InjectModel(BookComments.name)
        private BookCommentsModel: Model<BookCommentsDocument>,
    ) {}

    async create(dto: BookCommentsDto) {
        return await this.BookCommentsModel.create(dto);
    }

    async update(id: string, dto: Omit<BookCommentsDto, 'bookId'>) {
        return this.BookCommentsModel.findByIdAndUpdate(id, dto);
    }

    async find(id: string) {
        return this.BookCommentsModel.findById(id);
    }

    async delete(id: string) {
        return this.BookCommentsModel.findByIdAndRemove(id);
    }

    async findAllComments(bookId: string) {
        return this.BookCommentsModel.find({bookId});
    }
}