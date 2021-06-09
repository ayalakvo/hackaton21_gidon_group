import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service'
import { User } from './user.entity'

@Controller('user')
export class UserController {
    constructor(
        private readonly UserService: UserService
    ) { }

    @Post('/add-user')
    async addUser(@Body() userInfo: User): Promise<{ user: User | Error | string }> {
        console.log("in controller");
        try {
            // const fakeUser = { firstName: 'ayala', lastName: 'cavodov', password: '1234' }
            this.UserService.addUser(userInfo)
        }
        catch (err) {
            console.log(err);
            return err;
        }

    }



}
