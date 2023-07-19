import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { Movies } from './movies.entity';
import { Studios } from '../studios/studios.entity';
import { OrderItems } from '../orders/orderItems.entity';
import { BaseTimestampEntity } from '../base.entity';

@Entity()
export class MovieSchedules extends BaseTimestampEntity{
  @ManyToOne(() => Movies, (movie) => movie.movieSchedules, { 
    onDelete: 'CASCADE' 
  })
  movie: Movies

  @ManyToOne(() => Studios, (studio) => studio.movieSchedules, { 
    onDelete: 'CASCADE' 
  }) 
  studio: Studios

  @OneToMany(() => OrderItems, (orderItems) => orderItems.movieSchedule)
  orderItems: OrderItems[]

  @Column({name: 'start_time', type: 'datetime'})
  startTime: Date

  @Column({name: 'end_time', type: 'datetime'})
  endTime: Date
}