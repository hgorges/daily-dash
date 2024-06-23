import { Knex } from 'knex';
import bcrypt from 'bcrypt';

export async function seed(knex: Knex): Promise<void> {
    await knex('users').insert([
        {
            username: 'system',
            first_name: 'System',
            last_name: 'User',
            email: 'system@cryptospace.dev',
            password: await bcrypt.hash(
                Math.random().toString(36).slice(-8),
                10
            ),
            created_at: knex.raw('now()'),
            created_by: 'system',
            updated_at: knex.raw('now()'),
            updated_by: 'system',
        },
        {
            username: 'test',
            first_name: 'Test',
            last_name: 'User',
            email: 'test@cryptospace.dev',
            password: await bcrypt.hash(
                Math.random().toString(36).slice(-8),
                10
            ),
            created_at: knex.raw('now()'),
            created_by: 'system',
            updated_at: knex.raw('now()'),
            updated_by: 'system',
        },
    ]);
}
