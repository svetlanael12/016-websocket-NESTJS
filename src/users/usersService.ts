import { Injectable } from "@nestjs/common"

export type User = any

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'Lana',
            password: 'mypass1',
        },
        {
            userId: 2,
            username: 'Piter',
            password: 'mypass2',
        },
    ]

    async findOne(id: number): Promise<User | undefined> {
        return this.users.find(user => user.userId = id)
    }
}