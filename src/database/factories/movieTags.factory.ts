import { define } from 'typeorm-seeding';
import Faker from 'faker';
import { Tags } from '../entities/movies/tags.entity';

define(Tags, (faker: typeof Faker) => {
  const tag = new Tags();
  tag.name = faker.word.adjective()
  return tag;
});
