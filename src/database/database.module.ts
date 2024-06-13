import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './typeOrmConfig.service';

@Module({
    imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useClass: TypeOrmConfigService,
      }),
    ]
  })
  export class DatabaseModule {}