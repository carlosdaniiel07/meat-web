import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations'

@Component({
  selector: 'meat-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
  ]
})
export class RestaurantDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
