import {Component, OnInit} from '@angular/core';
import {faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faCopy, faEnvelope, faMapMarker, faMobile, faPhone} from '@fortawesome/free-solid-svg-icons';
import {faCalendar} from '@fortawesome/free-solid-svg-icons/faCalendar';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  github = faGithub;
  linkedin = faLinkedin;
  twitter = faTwitter;
  mail = faEnvelope;
  calendar = faCalendar;
  location = faMapMarker;
  paper = faCopy;
  mobile = faMobile;
  sections: any[];


  constructor(private http: HttpClient) {
    // this.getYaml().subscribe(data => {
    //   this.sections = data;
    // });
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

  pdf(event, path): void {
    if (event.button === 0 || event.button === 1) {
      window.open(path, '_blank');
    }
  }
}
