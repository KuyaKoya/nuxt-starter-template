import pg from 'pg'
import { Kysely, PostgresDialect } from 'kysely'
import type { DB } from './types'

const config = useRuntimeConfig()

export const db = new Kysely<DB>({
  dialect: new PostgresDialect({
    pool: new pg.Pool({
      connectionString: config.DATABASE_URL,
    }),
  }),
})
