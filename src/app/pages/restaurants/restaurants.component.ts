import { Component, OnInit } from '@angular/core'
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, slideInUpOnEnterAnimation } from 'angular-animations'
import { Restaurant } from 'src/app/models'

@Component({
  selector: 'meat-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    slideInUpOnEnterAnimation({ duration: 800 }),
  ]
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [
    {
      id: 'bread-bakery',
      name: 'Bread & Bakery',
      category: 'Padaria',
      deliveryDelay: '25m',
      rating: 4.9,
      imagePath: 'assets/images/restaurants/breadbakery.png',
      description: 'A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães. Compre e confira.',
      openingHours: 'Funciona de segunda à sexta, de 8h às 23h',
    },
    {
      id: 'burger-house',
      name: 'Burger House',
      category: 'Hamburgers',
      deliveryDelay: '100m',
      rating: 3.5,
      imagePath: 'assets/images/restaurants/burgerhouse.png',
      description: '40 anos se especializando em trash food.',
      openingHours: 'Funciona todos os dias, de 10h às 22h'
    },
    {
      id: 'coffee-corner',
      name: 'Coffee Corner',
      category: 'Cafeteria',
      deliveryDelay: '30-40m',
      rating: 4.8,
      imagePath: 'assets/images/restaurants/coffeecorner.png',
      description: 'A Coffe Corner foi eleita a melhor cafeteria da cidade.',
      openingHours: 'Funciona de segunda à sábado, de 6h às 22h'
    },
    {
      id: 'green-food',
      name: 'Green Food',
      category: 'Saudável',
      deliveryDelay: '75m',
      rating: 4.1,
      imagePath: 'assets/images/restaurants/greenfood.png',
      description: 'Comida saudável é no Green Food. Compramos barato, vendemos caro. ;)',
      openingHours: 'Somente em horário de almoço, das 11h às 15h'
    },
    {
      id: 'ice-cream',
      name: 'Ice Cream',
      category: 'Sorvetes',
      deliveryDelay: '40-65m',
      rating: 4.5,
      imagePath: 'assets/images/restaurants/icy.png',
      description: 'A Ice Cream é uma sorveteria inovadora.',
      openingHours: 'Funciona todos os dias, de 10h às 1h'
    },
    {
      id: 'tasty-treats',
      name: 'Tasty Treats',
      category: 'Doces',
      deliveryDelay: '20m',
      rating: 4.4,
      imagePath: 'assets/images/restaurants/tasty.png',
      description: 'A doceria com mais tradição da cidade',
      openingHours: 'Funciona de segunda à sábado, de 8h às 23h'
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }
}
