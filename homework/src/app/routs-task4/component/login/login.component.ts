import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  login: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    const validUsers = [
      {
        login: 'Денис',
        password: '1812',
      },

      {
        login: 'Михайло',
        password: '1911',
      },
    ];

    const user = validUsers.find(
      (user) => user.login === this.login && user.password === this.password
    );

    if (user) {
      this.router.navigate(['/task4/moderator'], {
        queryParams: { name: user.login },
      });
    } else {
      alert('Wrong login or password');
    }
  }
}
