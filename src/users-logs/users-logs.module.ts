import { Module } from '@nestjs/common';
import { UsersLogsService } from './users-logs.service';
import { UsersLogsController } from './users-logs.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [UsersLogsController],
  providers: [UsersLogsService, PrismaService],
})
export class UsersLogsModule {}
