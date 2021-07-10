import { Injectable } from '@angular/core'
import { BehaviorSubject, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading = new BehaviorSubject<boolean>(false)
  public readonly loading$ = this.loading.asObservable()

  constructor() {}

  public start(): void {
    this.loading.next(true)
  }

  public stop(): void {
    this.loading.next(false)
  }
}
