import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';
import { Users } from '../entities/users/users.entity';
import * as bcrypt from 'bcrypt';

define(Users, () => {
    const user = new Users();

    user.name = 'admin';
    user.email = 'admin@mail.com';
    user.password = '$2b$10$YdXsACacWvrg8BKek4HeG.PwIaVUvPyHS8GsjcXcrqetd97nmgC9G' // rahasia123
    user.isAdmin = true;
    return user;
});
