import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { Menu, Restaurant, Review } from '../models'

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private readonly http: HttpClient) {}

  public findAll(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${environment.apiUrl}/restaurants`)
  }

  public findById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${environment.apiUrl}/restaurants/${id}`)
  }

  public findMenuByRestaurant(id: string): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${environment.apiUrl}/restaurants/${id}/menu`)
  }

  public findReviewsByRestaurant(id: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${environment.apiUrl}/restaurants/${id}/reviews`)
  }
}
