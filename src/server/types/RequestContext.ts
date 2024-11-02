import { Kysely, Transaction } from 'kysely'
import type { DB } from '../db/types'

export type RequestContext = {
  auth: {
    userId?: string
  }
  trx?: Transaction<DB> | Kysely<DB>
}
