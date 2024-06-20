// src/queue/queue.service.ts
import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class QueueService {
    constructor(@InjectQueue('my-queue') private readonly queue: Queue) {}
    
    private async delayedJob(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async addJob(data) {
        await this.queue.add('my-job', data);
        console.log('add job', data);
        
        await this.delayedJob(2000);
    }
}