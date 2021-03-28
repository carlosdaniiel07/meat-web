import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment';
import { Restaurant } from '../models';

@Injectable()
export class RestaurantService {

  constructor(private readonly http: HttpClient) {}

  public findAll(): Promise<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${environment.apiUrl}/restaurants`).toPromise()
  }

  public findById(id: string): Promise<Restaurant> {
    return this.http.get<Restaurant>(`${environment.apiUrl}/restaurants/${id}`).toPromise()
  }
}
