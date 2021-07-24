import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
} from 'angular-animations'
import { finalize } from 'rxjs/operators'
import { Restaurant } from 'src/app/models'
import { RestaurantService } from 'src/app/services/restaurant.service'

@Component({
  selector: 'meat-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  animations: [fadeInOnEnterAnimation(), fadeOutOnLeaveAnimation()],
})
export class RestaurantDetailsComponent implements OnInit {
  restaurant?: Restaurant
  loading = false

  constructor(
    private readonly route: ActivatedRoute,
    private readonly restaurantService: RestaurantService,
  ) {}

  ngOnInit(): void {
    const restaurantId = this.route.snapshot.params.id
    this.loadRestaurant(restaurantId)
  }

  private loadRestaurant(id: string): void {
    this.loading = true

    this.restaurantService
      .findById(id)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((data) => (this.restaurant = data))
  }
}
