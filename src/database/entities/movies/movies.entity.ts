import { Entity, Column, OneToMany } from 'typeorm';
import { MovieTags } from './movieTags.entity';
import { MovieSchedules } from './movieSchedules.entity';
import { BaseTimestampEntity } from '../base.entity';

@Entity()
export class Movies extends BaseTimestampEntity{
  @Column()
  title: string;

  @Column({type: 'text'})
  overview: string;

  @Column()
  poster: string;

  @Column({ name: 'play_until'})
  playUntil: string;

  @OneToMany(() => MovieTags, (movieTags) => movieTags.movies)
  movieTags: MovieTags[]

  @OneToMany(() => MovieSchedules, (movieSchedule) => movieSchedule.movie)
  movieSchedules: MovieSchedules[]
}