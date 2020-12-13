import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('closed', style({
        height: '0px',
        opacity: 0
      })),
      state('open', style({
        opacity: 1
      })),
      transition('* => closed', [
        animate('0.2s')
      ]),
      transition('* => open', [
        animate('0.2s')
      ]),
    ]),
  ],
})
export class ReviewsComponent implements OnInit {
  open = false;

  constructor() {
  }

  ngOnInit(): void {
  }
}
