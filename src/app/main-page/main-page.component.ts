import {Component, OnInit} from '@angular/core';
import {faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faMapMarker, faMarker} from '@fortawesome/free-solid-svg-icons';
import {faCalendar} from '@fortawesome/free-solid-svg-icons/faCalendar';
import {Observable} from 'rxjs';
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
  sections: any[];

  constructor(private http: HttpClient) {
    this.getYaml().subscribe(data => {
      this.sections = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

  goToLink(url: string): void {
    window.open(url, '_blank');
  }

  goToPage(url: string): void {
    window.location.href = url;
  }

  getYaml(): Observable<any> {
    return this.http.get('./assets/main-page-content.json', {
      observe: 'body',
      responseType: 'json'// This one here tells HttpClient to parse it as text, not as JSON
    });
  }
}
