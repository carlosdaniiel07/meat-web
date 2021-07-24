import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { RestaurantsComponent } from './pages/restaurants/restaurants.component'
import { RestaurantDetailsComponent } from './pages/restaurants/restaurant-details/restaurant-details.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { RestaurantMenuCardComponent } from './components/cards/restaurant-menu-card/restaurant-menu-card.component'
import { RestaurantReviewsCardComponent } from './components/cards/restaurant-reviews-card/restaurant-reviews-card.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'restaurants',
    component: RestaurantsComponent
  },
  {
    path: 'restaurants/:id',
    component: RestaurantDetailsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'menu',
      },
      {
        path: 'menu',
        component: RestaurantMenuCardComponent,
      },
      {
        path: 'reviews',
        component: RestaurantReviewsCardComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
