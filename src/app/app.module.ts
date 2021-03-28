import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'

// Layout
import { HeaderComponent } from './components/layout/header/header.component'
import { FooterComponent } from './components/layout/footer/footer.component'

// Pages
import { HomeComponent } from './pages/home/home.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { RestaurantsComponent } from './pages/restaurants/restaurants.component'

// Cards
import { WelcomeCardComponent } from './components/cards/welcome-card/welcome-card.component'
import { RestaurantCardComponent } from './components/cards/restaurant-card/restaurant-card.component'
import { ServicesModule } from './services/services.module';
import { RestaurantDetailsComponent } from './pages/restaurants/restaurant-details/restaurant-details.component';
import { RestaurantDetailsCardComponent } from './components/cards/restaurant-details-card/restaurant-details-card.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WelcomeCardComponent,
    NotFoundComponent,
    RestaurantsComponent,
    RestaurantCardComponent,
    RestaurantDetailsComponent,
    RestaurantDetailsCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServicesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
