import { Component, OnInit } from '@angular/core'
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations'

@Component({
  selector: 'meat-not-found',
  templateUrl: './not-found.component.html',
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
  ]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
