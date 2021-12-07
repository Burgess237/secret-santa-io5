import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LoginPage } from '../account/login/login.page';
import { SmallLoginComponent } from '../small-login/small-login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  exchanges = [
    {
      id: '1',
      image: 'http://placeimg.com/600/600/tech',
      name: 'Example Exchange'
    },
    {
      id: '2',
      image: 'http://placeimg.com/600/600/tech',
      name: 'Example Exchange'
    },
    {
      id: '3',
      image: 'http://placeimg.com/600/600/tech',
      name: 'Example Exchange'
    },
    {
      id: '4',
      image: 'http://placeimg.com/600/600/tech',
      name: 'Example Exchange'
    }
  ];

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  async loginPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: SmallLoginComponent,
      event: ev,
      translucent: false
    });

    await popover.present();
  }

  getExchanges() {

  }

}
