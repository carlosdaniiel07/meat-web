import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

// Pages
import { HomeComponent } from './pages/home/home.component'
import { RestaurantsComponent } from './pages/restaurants/restaurants.component'
import { RestaurantDetailsComponent } from './pages/restaurants/restaurant-details/restaurant-details.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'

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
    component: RestaurantDetailsComponent
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
