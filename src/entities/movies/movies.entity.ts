import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { MovieTags } from './movieTags.entity';

@Entity()
export class Movies {
  @PrimaryGeneratedColumn()
  id: number;

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

  @CreateDateColumn({ name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}