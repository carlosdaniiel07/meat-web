import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations'
import { Restaurant } from 'src/app/models'
import { RestaurantService } from 'src/app/services/restaurant.service'

@Component({
  selector: 'meat-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
  ]
})
export class RestaurantDetailsComponent implements OnInit {

  restaurant?: Restaurant

  constructor(
    private readonly route: ActivatedRoute,
    private readonly restaurantService: RestaurantService
  ) { }

  ngOnInit(): void {
    const restaurantId = this.route.snapshot.params.id
    this.loadRestaurant(restaurantId)
  }

  private async loadRestaurant(id: string): Promise<void> {
    this.restaurant = await this.restaurantService.findById(id)
  }
}
