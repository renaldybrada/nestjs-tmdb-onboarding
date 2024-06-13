import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class SyncTmdbService {
  private readonly logger = new Logger(SyncTmdbService.name);

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  handleCron() {
    const tmdbToken:string = process.env.TMDB_TOKEN;

    this.logger.debug(tmdbToken);
  }
}