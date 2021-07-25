import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { CreateOrderDto } from '../models/dto/create-order.dto'

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private readonly http: HttpClient) {}

  public save(createOrderDto: CreateOrderDto): Observable<void> {
    return this.http.post<void>(
      `${environment.apiUrl}/orders`,
      createOrderDto
    )
  }
}
