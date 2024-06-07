import { Controller, Get, Param } from '@nestjs/common';
import { UsersLogsService } from './users-logs.service';

@Controller('users-logs')
export class UsersLogsController {
  constructor(private readonly usersLogsService: UsersLogsService) {}
  @Get("/all")
  // @ApiPaginatedResponse()
  async getAll(){
    return this.usersLogsService.getAll()
  }
  @Get(":id")
  async getInfo(@Param("id") id: string){
    return this.usersLogsService.getInfo(id)
  }

}
