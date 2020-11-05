import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActive = true;
  buttons: any[] = [
    {
      text: 'Home',
      route: '/main',
      tooltip: 'Personal information about me'
    },
    {
      text: 'Lectures Reviewed',
      route: '/reviews',
      tooltip: 'Reviews of lectures available on YouTube'
    },
    {
      text: 'CV as PDF',
      dl: 'src/assets/cv_hannes_stark.pdf',
      tooltip: 'Download CV as PDF'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  clickedButton(event, activeButton): void {
    if (activeButton.dl) {
      window.open('/assets/cv_hannes_stark.pdf', '_blank');
    }
  }
}
