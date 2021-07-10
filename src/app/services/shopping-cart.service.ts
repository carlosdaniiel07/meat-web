import { Injectable } from '@angular/core'
import { Menu } from '../models'
import { ShoppingCart } from '../models/shopping-cart.model'

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  // tslint:disable-next-line: variable-name
  private _cart: ShoppingCart[] = []

  public get cart(): ShoppingCart[] {
    return this._cart
  }

  public get totalValue(): number {
    return this.productsValue + this.deliveryFee
  }

  public get productsValue(): number {
    return this._cart
      .map((item) => item.total)
      .reduce((total, current) => total + current, 0)
  }

  public get deliveryFee(): number {
    const productsValue = this.productsValue
    const percentageFee = 0.05

    return productsValue * percentageFee
  }

  public addItem(product: Menu): void {
    const { id: productId } = product
    const alreadyOnCart = this._cart
      .map((x) => x.product.id)
      .includes(productId)

    if (alreadyOnCart) {
      const itemIndex = this._cart.findIndex((x) => x.product.id === productId)
      const cartItem = this._cart[itemIndex]
      const newQuantity = cartItem.quantity + 1

      this.cart[itemIndex] = {
        ...cartItem,
        quantity: newQuantity,
        total: cartItem.product.price * newQuantity,
      }
    } else {
      this._cart.push({
        product,
        quantity: 1,
        total: product.price * 1,
      })
    }
  }

  public removeItem(index: number): void {
    this._cart.splice(index, 1)
  }

  public clear(): void {
    this._cart = []
  }
}
