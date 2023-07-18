import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './domains/auth/auth.module';
import { MoviesModule } from './domains/movies/movies.module';

@Module({
  imports: [DatabaseModule, AuthModule, MoviesModule]
})
export class AppModule {}
