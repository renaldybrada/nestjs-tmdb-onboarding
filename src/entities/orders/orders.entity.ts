import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import { Users } from '../users/users.entity';

export enum PaymenMethod {
    CASH = 'cash',
    QRIS = 'qris',
    DEBT = 'debt',
    CC = 'credit card',
}

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Users, (user) => user.id)
  user: Users

  @Column({
    name: 'payment_method',
    type: 'enum',
    enum: PaymenMethod,
    default: PaymenMethod.CASH
  })
  paymentMethod: PaymenMethod

  @Column({name: 'total_item_price', type: 'double'})
  totalItemPrice: number

  @CreateDateColumn({ name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}