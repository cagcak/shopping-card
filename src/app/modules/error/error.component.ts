import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `<p>No route found <a [routerLink]="['/']">return to main page</a></p> `,
})
export class ErrorComponent {}
