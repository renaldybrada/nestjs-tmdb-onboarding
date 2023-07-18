import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { MovieSchedules } from '../movies/movieSchedules.entity';

@Entity()
export class Studios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'studio_number', type: 'int'})
  studioNumber: number;

  @Column({name: 'seat_capacity', type: 'int'})
  seatCapacity: number;

  @OneToMany(() => MovieSchedules, (movieSchedule) => movieSchedule.studio)
  movieSchedules: MovieSchedules[]

  @CreateDateColumn({ name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}