import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';
import { Tags } from '../entities/movies/tags.entity';

define(Tags, () => {
  const tag = new Tags();
  tag.name = faker.word.adjective();
  return tag;
});
