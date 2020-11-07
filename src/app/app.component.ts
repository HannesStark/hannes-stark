import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hannes-stark';
  scrolled = false;

  constructor() {
  }

  onWindowScroll(event: any): void {
    this.scrolled = window.scrollY > 50;
  }
}
