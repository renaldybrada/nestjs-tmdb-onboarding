import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Movies } from './movies.entity';
import { Tags } from './tags.entity';

@Entity()
export class MovieTags {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Movies, (movie) => movie.movieTags)
  movies: Movies

  @ManyToOne(() => Tags, (tag) => tag.movieTags)
  tags: Tags

  @CreateDateColumn({ name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}