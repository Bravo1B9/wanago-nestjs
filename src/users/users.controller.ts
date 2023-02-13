import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import CreateUserDto from "./dto/createUser.dto";
import FindByEmail from "./dto/findByEmail.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUserByEmail(@Body() dto: FindByEmail) {
    return this.usersService.getUserByEmail(dto);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(Number(id));
  }

}