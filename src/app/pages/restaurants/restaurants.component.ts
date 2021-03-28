import { Component, OnInit } from '@angular/core'
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, slideInUpOnEnterAnimation } from 'angular-animations'
import { Restaurant } from 'src/app/models'
import { RestaurantService } from 'src/app/services/restaurant.service'

@Component({
  selector: 'meat-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    slideInUpOnEnterAnimation({ duration: 800 }),
  ]
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = []

  constructor(private readonly restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.loadRestaurants()
  }

  private async loadRestaurants(): Promise<void> {
    this.restaurants = await this.restaurantService.findAll()
  }
}
