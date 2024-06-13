import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './domains/auth/auth.module';
import { MoviesModule } from './domains/movies/movies.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DatabaseModule, 
    AuthModule, 
    MoviesModule, 
    ScheduleModule.forRoot()
  ]
})
export class AppModule {}
