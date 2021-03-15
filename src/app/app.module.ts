import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'

// Layout
import { HeaderComponent } from './components/layout/header/header.component'
import { FooterComponent } from './components/layout/footer/footer.component'

// Pages
import { HomeComponent } from './pages/home/home.component'
import { NotFoundComponent } from './pages/not-found/not-found.component'

// Cards
import { WelcomeCardComponent } from './components/cards/welcome/welcome-card.component'

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, WelcomeCardComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
