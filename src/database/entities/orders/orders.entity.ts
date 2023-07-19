import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { Users } from '../users/users.entity';
import { OrderItems } from './orderItems.entity';
import { BaseTimestampEntity } from '../base.entity';

export enum PaymenMethod {
    CASH = 'cash',
    QRIS = 'qris',
    DEBT = 'debt',
    CC = 'credit card',
}

@Entity()
export class Orders extends BaseTimestampEntity{
  @ManyToOne(() => Users, (user) => user.orders, { 
    onDelete: 'CASCADE' 
  })
  user: Users

  @OneToMany(() => OrderItems, (items) => items.order, { 
    onDelete: 'CASCADE'
  })
  items: OrderItems

  @Column({
    name: 'payment_method',
    type: 'enum',
    enum: PaymenMethod,
    default: PaymenMethod.CASH
  })
  paymentMethod: PaymenMethod

  @Column({name: 'total_item_price', type: 'double'})
  totalItemPrice: number
}