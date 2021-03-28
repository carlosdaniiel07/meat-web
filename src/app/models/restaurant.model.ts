import { Base } from './base.model'
import { Menu } from './menu.model'

export interface Restaurant extends Base {
  name: string
  description: string
  openingHours: string
  category: string
  deliveryDelay: string
  rating: number
  imagePath: string
  menu: Menu[]
}
