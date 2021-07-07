import {Component, OnInit} from '@angular/core';
import {faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faCopy, faEnvelope, faMapMarker, faMobile, faPhone, faUser, faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import {faCalendar} from '@fortawesome/free-solid-svg-icons/faCalendar';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

import {LAImageComponent} from "../laimage/laimage.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

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
  authors = faUser;
  Gscholar = faGraduationCap;
  location = faMapMarker;
  paper = faCopy;
  mobile = faMobile;
  sections: any[];
  safeURLNerf;
  safeURLLightAttention;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private dialog: MatDialog) {
    this.safeURLNerf = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/8MCWE7R0xN8');
    this.safeURLLightAttention = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/6gDy8-yOJqY');

  }

  ngOnInit(): void {
  }

  goToLink(event, url: string): void {
    if (event.button === 0 || event.button === 1) {
      const parentOpener = window.opener;
      window.opener = null;
      window.open(url, '_blank');
      window.opener = parentOpener;

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

  openLAImage(): void {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = true;
      this.dialog.open(LAImageComponent, dialogConfig);
    }


  scroll(target: string): void {
    const dims = document.getElementById(target).offsetTop;
    window.scrollTo(
      {
        top: dims - 64,
        left: window.scrollX,
        behavior: 'smooth'
      }
    );

  }

}

