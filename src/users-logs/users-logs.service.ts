import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';

@Injectable()
export class UsersLogsService {
  constructor(private prisma: PrismaService) {}

  async getInfo(id:string){
    return this.prisma.userLogs.findMany({where: {
      userId: +id
      }})
  }
  async getAll(){
    return this.prisma.userLogs.findMany();
  }
}
