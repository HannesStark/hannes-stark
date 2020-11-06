import {Component, Inject, OnInit} from '@angular/core';
import {faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  github = faGithub;
  linkedin = faLinkedin;
  twitter = faTwitter;
  mail = faEnvelope;
  buttons: any[] = [
    {
      text: 'Home',
      route: '/main',
      tooltip: 'Personal information about me'
    },
    //{
    //  text: 'Lectures Reviewed',
    //  route: '/reviews',
    //  tooltip: 'Reviews of lectures available on YouTube'
    //}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  goToLink(event, url: string): void {
    if (event.button === 0 || event.button === 1) {
      window.open(url, '_blank');
    }
  }

  goToPage(event, url: string): void {
    if (event.button === 0 || event.button === 1) {
      window.location.href = url;
    }
  }

  pdf(event): void {
    if (event.button === 0 || event.button === 1) {
      window.open('/hannes-stark/assets/cv_hannes_stark.pdf', '_blank');
    }
  }
}
