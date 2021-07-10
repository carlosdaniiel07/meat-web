import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations'
import { Observable } from 'rxjs'
import { Restaurant } from 'src/app/models'
import { LoadingService } from 'src/app/services/loading.service'
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
    private readonly restaurantService: RestaurantService,
    private readonly loadingService: LoadingService,
  ) { }

  ngOnInit(): void {
    const restaurantId = this.route.snapshot.params.id
    this.loadRestaurant(restaurantId)
  }

  public get loading(): Observable<boolean> {
    return this.loadingService.loading$
  }

  private loadRestaurant(id: string): void {
    this.restaurantService.findById(id).subscribe((data) => (this.restaurant = data))
  }
}
