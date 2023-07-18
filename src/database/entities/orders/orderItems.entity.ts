import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import { Orders } from './orders.entity';
import { MovieSchedules } from '../movies/movieSchedules.entity';

@Entity()
export class OrderItems {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Orders, (order) => order.items)
  order: Orders

  @ManyToOne(() => MovieSchedules, (movieSchedule) => movieSchedule.orderItems)
  movieSchedule: MovieSchedules

  @Column({name: 'qty', type: 'int'})
  qty: number

  @Column({name: 'price', type: 'double'})
  price: number

  @Column({name: 'sub_total_price', type: 'double'})
  subTotalPrice: number

  @Column({name: 'snapshot', type: 'text'})
  snapshot: string

  @CreateDateColumn({ name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}