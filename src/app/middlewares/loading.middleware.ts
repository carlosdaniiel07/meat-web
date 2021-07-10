import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { finalize } from 'rxjs/operators'
import { LoadingService } from '../services/loading.service'

@Injectable({
  providedIn: 'root',
})
export class LoadingMiddleware implements HttpInterceptor {
  private activeRequests = 0

  constructor(private readonly loadingService: LoadingService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.activeRequests === 0) {
      this.loadingService.start()
    }

    this.activeRequests += 1

    return next.handle(req).pipe(
      finalize(() => {
        this.activeRequests -= 1

        if (this.activeRequests === 0) {
          this.loadingService.stop()
        }
      })
    )
  }
}
