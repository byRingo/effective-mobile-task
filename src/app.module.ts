import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UsersLogsModule } from './users-logs/users-logs.module';

@Module({
  imports: [UserModule, UsersLogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
