import { Component, Input, OnInit } from '@angular/core'
import { Restaurant } from 'src/app/models'

@Component({
  selector: 'meat-restaurant-card',
  templateUrl: './restaurant-card.component.html',
})
export class RestaurantCardComponent implements OnInit {
  @Input() restaurant?: Restaurant

  constructor() { }

  ngOnInit(): void {
  }
}
