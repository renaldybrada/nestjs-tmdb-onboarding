import { Entity, Column, OneToMany } from 'typeorm';
import { MovieSchedules } from '../movies/movieSchedules.entity';
import { BaseTimestampEntity } from '../base.entity';

@Entity()
export class Studios extends BaseTimestampEntity{
  @Column({name: 'studio_number', type: 'int'})
  studioNumber: number;

  @Column({name: 'seat_capacity', type: 'int'})
  seatCapacity: number;

  @OneToMany(() => MovieSchedules, (movieSchedule) => movieSchedule.studio)
  movieSchedules: MovieSchedules[]
}