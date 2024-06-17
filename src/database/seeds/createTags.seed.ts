import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Tags } from '../entities/movies/tags.entity';

export default class CreateTag implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await factory(Tags)().createMany(10);
  }
}
