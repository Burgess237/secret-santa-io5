import { Component, HostListener } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Platform } from '@ionic/angular';
import { ScreensizeService } from './services/screensize.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  pageTitle: string;
  isDesktop: boolean;

  constructor(
    public authService: AuthService,
    public titleService: Title,
  ) {
    this.initializeApp();
    this.titleService.setTitle('Mixr App');
  }

  logOut() {

  }


  initializeApp() {

  }


}
