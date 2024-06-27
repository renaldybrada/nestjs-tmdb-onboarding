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
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './domains/auth/guards/auth.guard';
import { MiddlewareModule } from './domains/middleware/middleware.module';

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
    MiddlewareModule
  ],
  providers: [
    { // simple checking authorization
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ]
})
export class AppModule {}
