import { H3EventContext } from 'h3'
import { RequestContext } from '~/server/types/RequestContext'
declare module 'h3' {
  interface H3EventContext extends RequestContext {}
}
