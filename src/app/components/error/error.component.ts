import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `<h1 class="errorMessage">404 - Page Not Found.</h1>`,
  styles: [`.errorMessage {
              margin-top: 150px;
              font-size: 75px;
              text-align: center;
            }`]
})
export class ErrorComponent { }
