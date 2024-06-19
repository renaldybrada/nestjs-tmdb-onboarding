import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Users } from '../entities/users/users.entity';
import { Studios } from '../entities/studios/studios.entity';
import { randomInt } from 'crypto';

export default class CreateStudios implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const studios = [];
    for (let i = 1; i <= 10; i++) {
      studios.push({
        studioNumber: i,
        seatCapacity: randomInt(100, 200),
      });
    }

    await connection
      .createQueryBuilder()
      .insert()
      .into(Studios)
      .values(studios)
      .execute();
  }
}
