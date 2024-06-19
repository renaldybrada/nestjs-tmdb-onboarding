import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './domains/auth/auth.module';
import { MoviesModule } from './domains/movies/movies.module';
import { ScheduleModule } from '@nestjs/schedule';
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from 'path';
import { BackofficeModule } from './domains/backoffice/backoffice.module';
import { TransactionsModule } from './domains/transactions/transactions.module';

@Module({
  imports: [
    DatabaseModule, 
    AuthModule, 
    MoviesModule, 
    BackofficeModule,
    TransactionsModule,
    ScheduleModule.forRoot(),
    MulterModule.register({
        dest: './uploads'
    }),
  ]
})
export class AppModule {}
