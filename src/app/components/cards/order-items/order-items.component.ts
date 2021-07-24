import { Component, OnInit } from '@angular/core'
import { ShoppingCart } from 'src/app/models/shopping-cart.model'
import { ShoppingCartService } from 'src/app/services/shopping-cart.service'

@Component({
  selector: 'meat-order-items',
  templateUrl: './order-items.component.html',
})
export class OrderItemsComponent implements OnInit {
  constructor(
    private readonly shoppingCartService: ShoppingCartService
  ) {}

  ngOnInit(): void {}

  public get items(): ShoppingCart[] {
    return this.shoppingCartService.cart
  }

  public increaseQty(item: ShoppingCart): void {
    this.shoppingCartService.addItem(item.product)
  }

  public decreaseQty(item: ShoppingCart): void {
    this.shoppingCartService.decreaseQty(item.product)
  }

  public remove(item: ShoppingCart): void {
    this.shoppingCartService.removeItem(item.product)
  }

  public getItemTotal(item: ShoppingCart): number {
    return this.shoppingCartService.getItemTotal(item)
  }
}
