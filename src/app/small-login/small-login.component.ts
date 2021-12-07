import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-small-login',
  templateUrl: './small-login.component.html',
  styleUrls: ['./small-login.component.scss'],
})
export class SmallLoginComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() { }

  logIn(email, password) {
    this.authService.signIn(email.value, password.value)
      .then((res) => {
        if (this.authService.isEmailVerified) {

        } else {
          window.alert('Email is not verified');
          return false;
        }
      }).catch((error) => {
        window.alert(error.message);
      });
  }

}
