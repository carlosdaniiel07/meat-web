import { Menu } from './menu.model'

export interface ShoppingCart {
  product: Menu
  quantity: number
  total: number
}
