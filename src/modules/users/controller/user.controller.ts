import { Controller, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return this.userService.findAllUsers();
  }
}
