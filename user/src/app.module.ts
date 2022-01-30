import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsercoursesModule } from './usercourses/usercourses.module';

@Module({
  imports: [UsersModule, UsercoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
