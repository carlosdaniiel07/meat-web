import { Component, OnInit } from '@angular/core';
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
} from 'angular-animations';

@Component({
  selector: 'meat-order',
  templateUrl: './order.component.html',
  animations: [fadeInOnEnterAnimation(), fadeOutOnLeaveAnimation()],
})
export class OrderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
