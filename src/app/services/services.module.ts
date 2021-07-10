import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { RestaurantService } from './restaurant.service'
import { LoadingService } from './loading.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    RestaurantService,
    LoadingService,
  ],
})
export class ServicesModule { }
