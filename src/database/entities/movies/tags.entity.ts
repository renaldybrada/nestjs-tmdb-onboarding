import { Entity, Column, OneToMany } from 'typeorm';
import { MovieTags } from './movieTags.entity';
import { BaseTimestampEntity } from '../base.entity';

@Entity()
export class Tags extends BaseTimestampEntity{
  @Column()
  name: string;

  @OneToMany(() => MovieTags, (movieTags) => movieTags.tags)
  movieTags: MovieTags[]
}