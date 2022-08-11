import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getHello(): string {
        return 'here is user'
    }
}
