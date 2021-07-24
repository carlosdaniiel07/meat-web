import { Base } from './base.model'

export interface Review extends Base {
  name?: string
  description?: string
  rating?: number
}
