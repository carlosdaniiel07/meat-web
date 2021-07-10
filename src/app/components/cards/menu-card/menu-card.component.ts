import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Menu } from 'src/app/models'

@Component({
  selector: 'meat-menu-card',
  templateUrl: './menu-card.component.html'
})
export class MenuCardComponent implements OnInit {
  @Input() menu?: Menu
  @Output() addItem = new EventEmitter<Menu>()

  constructor() { }

  ngOnInit(): void {
  }
}
