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
    const user= await this.prisma.user.create({
      data: dto
    })
    console.log(user)
    const logs = await this.prisma.userLogs.create({data:{
      userId: user.id,
        action: "create",
        time: new Date()
      }})
    return user
  }

  async update(id: string, dto: UserDto){
    const userToUpdate = await this.prisma.user.update({where: {
        id: +id
      },
      data: dto})
    const logs = await this.prisma.userLogs.create({data:{
      userId: userToUpdate.id,
        action: "update",
        time: new Date()
      }})
    return userToUpdate ? userToUpdate : new NotFoundException("No user to update")
  }

  async resetProblems(){
    const problemsQuantity = await this.prisma.user.findMany({where:{
      isProblems: true
      }})
    await this.prisma.user.updateMany({data:{
      isProblems: false
      }})
    return problemsQuantity.length
  }
}
