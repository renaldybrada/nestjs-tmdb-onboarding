import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import { Movies } from './movies.entity';
import { Studios } from '../studios/studios.entity';

@Entity()
export class MovieSchedules {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Movies, (movie) => movie.id)
  movie: Movies

  @ManyToOne(() => Studios, (studio) => studio.id)
  studio: Studios

  @Column({name: 'start_time', type: 'datetime'})
  startTime: Date

  @Column({name: 'end_time', type: 'datetime'})
  endTime: Date

  @CreateDateColumn({ name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}