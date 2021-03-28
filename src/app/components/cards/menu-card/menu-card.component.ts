import { Component, Input, OnInit } from '@angular/core'
import { Menu } from 'src/app/models'

@Component({
  selector: 'meat-menu-card',
  templateUrl: './menu-card.component.html'
})
export class MenuCardComponent implements OnInit {
  @Input() menu?: Menu

  constructor() { }

  ngOnInit(): void {
  }
}
