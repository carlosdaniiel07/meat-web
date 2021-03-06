import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ShoppingCart } from 'src/app/models/shopping-cart.model'
import { ShoppingCartService } from 'src/app/services/shopping-cart.service'

@Component({
  selector: 'meat-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  constructor(
    private readonly shoppingCartService: ShoppingCartService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

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

  public remove(item: ShoppingCart): void {
    this.shoppingCartService.removeItem(item.product)
  }

  public clear(): void {
    this.shoppingCartService.clear()
  }

  public submit(): void {
    this.router.navigate(['order'])
  }

  public getItemTotal(item: ShoppingCart): number {
    return this.shoppingCartService.getItemTotal(item)
  }
}
