import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { Restaurant } from '../models'

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {

  constructor(private readonly http: HttpClient) {}

  public findAll(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${environment.apiUrl}/restaurants`)
  }

  public findById(id: string): Promise<Restaurant> {
    return this.http.get<Restaurant>(`${environment.apiUrl}/restaurants/${id}`).toPromise()
  }
}
