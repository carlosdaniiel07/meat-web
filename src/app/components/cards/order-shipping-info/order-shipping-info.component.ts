import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'meat-order-shipping-info',
  templateUrl: './order-shipping-info.component.html',
})
export class OrderShippingInfoComponent implements OnInit {

  constructor(
    private readonly shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
  }

  public get productsValue(): number {
    return this.shoppingCartService.productsValue
  }

  public get deliveryFee(): number {
    return this.shoppingCartService.deliveryFee
  }

  public get total(): number {
    return this.shoppingCartService.totalValue
  }
}
