import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(password: string, firstName: string): boolean {
        const res = this.usersRepository.findOne({ password, firstName});
        if (res) {
            return true
        }
        else return false 
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }

    async addUser(userInfo: User) {
        console.log("in service");
        const user = await this.usersRepository.save(userInfo);
        console.log('user: ', user);
        return user
    }
}
