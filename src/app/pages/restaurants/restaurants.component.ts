import { Component, OnInit } from '@angular/core'
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations'
import { Observable } from 'rxjs'
import { Restaurant } from 'src/app/models'
import { LoadingService } from 'src/app/services/loading.service'
import { RestaurantService } from 'src/app/services/restaurant.service'

@Component({
  selector: 'meat-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
  ]
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[] = []

  constructor(
    private readonly restaurantService: RestaurantService,
    private readonly loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.loadRestaurants()
  }

  public get loading(): Observable<boolean> {
    return this.loadingService.loading$
  }

  private loadRestaurants(): void {
    this.restaurantService.findAll().subscribe((data) => (this.restaurants = data))
  }
}
