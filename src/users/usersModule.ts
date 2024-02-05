import { Module } from '@nestjs/common'
import { UsersService } from './usersService'

@Module({
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}