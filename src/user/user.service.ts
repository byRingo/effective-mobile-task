import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDto } from './user.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) {}

  async getAll(){
    return this.prisma.user.findMany()
  }

  async create(dto: UserDto){
    return this.prisma.user.create({
      data: dto
    })
  }

  async update(id: string, dto: UserDto){
    console.log(id, dto)
    const userToUpdate = await this.prisma.user.update({where: {
        id: +id
      },
      data: dto})
    return userToUpdate ? userToUpdate : new NotFoundException("No user to update")
  }
}
