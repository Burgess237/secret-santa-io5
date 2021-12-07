import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { SmallLoginComponent } from 'src/app/small-login/small-login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(public titleService: Title, public modalController: ModalController) { }

  ngOnInit() { }

  async loginModal() {
    const loginModal = await this.modalController.create({
      component: SmallLoginComponent
    });
    return await loginModal.present();
  }


}
