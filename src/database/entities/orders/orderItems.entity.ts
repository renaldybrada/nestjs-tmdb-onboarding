import { Entity, Column, ManyToOne } from 'typeorm';
import { Orders } from './orders.entity';
import { MovieSchedules } from '../movies/movieSchedules.entity';
import { BaseTimestampEntity } from '../base.entity';

@Entity()
export class OrderItems extends BaseTimestampEntity{
  @ManyToOne(() => Orders, (order) => order.items, { 
    onDelete: 'CASCADE' 
  })
  order: Orders

  @ManyToOne(() => MovieSchedules, (movieSchedule) => movieSchedule.orderItems, { 
    onDelete: 'CASCADE' 
  })
  movieSchedule: MovieSchedules

  @Column({name: 'qty', type: 'int'})
  qty: number

  @Column({name: 'price', type: 'double'})
  price: number

  @Column({name: 'sub_total_price', type: 'double'})
  subTotalPrice: number

  @Column({name: 'snapshot', type: 'text'})
  snapshot: string
}