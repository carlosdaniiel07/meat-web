import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
} from 'angular-animations'
import { Menu } from 'src/app/models'
import { LoadingService } from 'src/app/services/loading.service'
import { RestaurantService } from 'src/app/services/restaurant.service'
import { ShoppingCartService } from 'src/app/services/shopping-cart.service'

@Component({
  selector: 'meat-restaurant-menu-card',
  templateUrl: './restaurant-menu-card.component.html',
  animations: [fadeInOnEnterAnimation(), fadeOutOnLeaveAnimation()],
})
export class RestaurantMenuCardComponent implements OnInit {
  public menus: Menu[] = []

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly restaurantService: RestaurantService,
    private readonly shoppingCartService: ShoppingCartService,
    private readonly loadingService: LoadingService,
  ) {}

  ngOnInit(): void {
    this.loadMenu()
  }

  public get loading(): Observable<boolean> {
    return this.loadingService.loading$
  }

  public addItemToCart(item: Menu): void {
    this.shoppingCartService.addItem(item)
  }

  private loadMenu(): void {
    const restaurantId = this.activatedRoute.parent?.snapshot.params
      .id as string

    this.restaurantService
      .findMenuByRestaurant(restaurantId)
      .subscribe((data) => (this.menus = data))
  }
}
