import { Component } from '@angular/core';
import { AuthenticationService } from '../../../providers/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthenticationService, private router: Router) { }

  login(loginValues) {
    this.authService.authenticateUser(loginValues.userName, loginValues.password);
    this.router.navigate(['list']);
  }

  cancel() {
    this.router.navigate(['list']);
  }
}
