import { Component, OnInit } from '@angular/core'
import { ShoppingCart } from 'src/app/models/shopping-cart.model'
import { ShoppingCartService } from 'src/app/services/shopping-cart.service'

@Component({
  selector: 'meat-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private readonly shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
  }

  public get items(): ShoppingCart[] {
    return this.shoppingCartService.cart
  }

  public get totalValue(): number {
    return this.shoppingCartService.totalValue
  }

  public get deliveryFee(): number {
    return this.shoppingCartService.deliveryFee
  }

  public get isEmpty(): boolean {
    return this.items.length === 0
  }

  public remove(index: number): void {
    this.shoppingCartService.removeItem(index)
  }

  public clear(): void {
    this.shoppingCartService.clear()
  }
}
