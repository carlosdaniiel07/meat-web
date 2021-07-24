import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { registerLocaleData } from '@angular/common'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import ptBr from '@angular/common/locales/pt'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'

// Layout
import { HeaderComponent } from './components/layout/header/header.component'
import { FooterComponent } from './components/layout/footer/footer.component'

// Pages
import { HomeComponent } from './pages/home/home.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'
import { RestaurantsComponent } from './pages/restaurants/restaurants.component'
import { RestaurantDetailsComponent } from './pages/restaurants/restaurant-details/restaurant-details.component'

// Cards
import { WelcomeCardComponent } from './components/cards/welcome-card/welcome-card.component'
import { RestaurantCardComponent } from './components/cards/restaurant-card/restaurant-card.component'
import { ServicesModule } from './services/services.module'
import { RestaurantDetailsCardComponent } from './components/cards/restaurant-details-card/restaurant-details-card.component'
import { MenuCardComponent } from './components/cards/menu-card/menu-card.component'
import { ShoppingCartComponent } from './components/cards/shopping-cart/shopping-cart.component'
import { RestaurantMenuCardComponent } from './components/cards/restaurant-menu-card/restaurant-menu-card.component'

import { LoadingMiddleware } from './middlewares/loading.middleware'
import { LoadingComponent } from './components/core/loading/loading.component';
import { RestaurantReviewsCardComponent } from './components/cards/restaurant-reviews-card/restaurant-reviews-card.component';
import { ReviewCardComponent } from './components/cards/review-card/review-card.component'

registerLocaleData(ptBr)

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
    RestaurantDetailsCardComponent,
    MenuCardComponent,
    LoadingComponent,
    ShoppingCartComponent,
    RestaurantMenuCardComponent,
    RestaurantReviewsCardComponent,
    ReviewCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServicesModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'R$' },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingMiddleware, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
