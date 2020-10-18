import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isActive = true;
  buttons: any[] = [
    {
      text: 'Home',
      active: true,
      route: '/main',
      tooltip: 'Personal information about me'
    },
    {
      text: 'Lectures Reviewed',
      active: false,
      route: '/reviews',
      tooltip: 'Reviews of lectures available on YouTube'
    },
    {
      text: 'Random Reminder',
      active: false
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  clickedButton(event, activeButton): void {
    for (const button of this.buttons) {
      button.active = false;
    }
    activeButton.active = true;
  }


}
