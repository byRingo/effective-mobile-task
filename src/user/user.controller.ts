import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/all")
  async getUsers(){
      return this.userService.getAll()
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body () dto:UserDto){
    return this.userService.create(dto)
  }
  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto : UserDto){
      return this.userService.update(id, dto)
  }

  @Get("/problems")
  async resetProblems(){
    return this.userService.resetProblems()
  }
}
