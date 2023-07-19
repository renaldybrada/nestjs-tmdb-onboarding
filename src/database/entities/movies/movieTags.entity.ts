import { Entity, Column, ManyToOne } from 'typeorm';
import { Movies } from './movies.entity';
import { Tags } from './tags.entity';
import { BaseTimestampEntity } from '../base.entity';

@Entity()
export class MovieTags extends BaseTimestampEntity {
  @Column()
  name: string;

  @ManyToOne(() => Movies, (movie) => movie.movieTags, { 
    onDelete: 'CASCADE' 
  })
  movies: Movies

  @ManyToOne(() => Tags, (tag) => tag.movieTags, { 
    onDelete: 'CASCADE' 
  })
  tags: Tags
}