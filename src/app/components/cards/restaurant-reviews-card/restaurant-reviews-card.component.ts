import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { fadeInOnEnterAnimation } from 'angular-animations'
import { Observable } from 'rxjs'
import { Review } from 'src/app/models'
import { LoadingService } from 'src/app/services/loading.service'
import { RestaurantService } from 'src/app/services/restaurant.service'

@Component({
  selector: 'meat-restaurant-reviews-card',
  templateUrl: './restaurant-reviews-card.component.html',
  animations: [fadeInOnEnterAnimation()],
})
export class RestaurantReviewsCardComponent implements OnInit {
  public reviews: Review[] = []

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly restaurantService: RestaurantService,
    private readonly loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadReviews()
  }

  public get loading(): Observable<boolean> {
    return this.loadingService.loading$
  }

  private loadReviews(): void {
    const restaurantId = this.activatedRoute.parent?.snapshot.params
      .id as string

    this.restaurantService
      .findReviewsByRestaurant(restaurantId)
      .subscribe((data) => (this.reviews = data))
  }
}
