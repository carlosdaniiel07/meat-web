import { Base } from './base.model'

export interface Menu extends Base {
  name: string
  description: string
  imagePath: string
  price: number
}