// src/queue/queue.processor.ts
import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('my-queue')
export class QueueProcessor {
  @Process('my-job')
  async handleJob(job: Job) {
    console.log('Processing job:', job.data);
    // Perform your job processing logic here
  }
}
