import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookComments, BookCommentsSchema } from './BookCommentsSchema';
import { BookCommentsService } from './BookCommentsService';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: BookComments.name,
                schema: BookCommentsSchema,
            },
        ]),
    ],
    providers: [BookCommentsService],
    exports: [BookCommentsService],
})
export class BookCommentsModule {}