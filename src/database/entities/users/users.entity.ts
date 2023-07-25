import { Entity, Column, OneToMany } from 'typeorm';
import { Orders } from '../orders/orders.entity';
import { BaseTimestampEntity } from '../base.entity';

@Entity()
export class Users extends BaseTimestampEntity{
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ name: 'is_admin', type: 'boolean', default: false })
  isAdmin: boolean;

  @OneToMany(() => Orders, (order) => order.user)
  orders: Orders[]
}