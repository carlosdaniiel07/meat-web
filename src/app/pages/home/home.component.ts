import { Component, OnInit } from '@angular/core'
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations'

@Component({
  selector: 'meat-home',
  templateUrl: './home.component.html',
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
