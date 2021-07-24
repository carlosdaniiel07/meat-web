import { Component, Input, OnInit } from '@angular/core'
import { Review } from 'src/app/models'

@Component({
  selector: 'meat-review-card',
  templateUrl: './review-card.component.html',
})
export class ReviewCardComponent implements OnInit {
  @Input() review?: Review

  constructor() {}

  ngOnInit(): void {}

  public getReactionImagePath(): string {
    const basePath = 'assets/images/reactions'
    const rating = this.review?.rating as number
    const isLowRating = rating < 2
    const isMediumRating = rating >= 2 && rating < 4
    const reactionPath = isLowRating
      ? 'pissed.png'
      : isMediumRating
      ? 'soso.png'
      : 'loved.png'

    return `${basePath}/${reactionPath}`
  }
}
