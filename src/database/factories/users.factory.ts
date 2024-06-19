import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';
import { Users } from '../entities/users/users.entity';

define(Users, () => {
  const user = new Users();
  user.name = 'admin';
  user.email = 'admin@mail.com';
  user.password = 'rahasia123';
  user.isAdmin = true;
  return user;
});
