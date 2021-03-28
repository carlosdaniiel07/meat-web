import { Component, Input, OnInit } from '@angular/core'
import { Restaurant } from 'src/app/models'

@Component({
  selector: 'meat-restaurant-details-card',
  templateUrl: './restaurant-details-card.component.html'
})
export class RestaurantDetailsCardComponent implements OnInit {
  @Input() restaurant?: Restaurant

  constructor() {
  }

  ngOnInit(): void {
  }
}
