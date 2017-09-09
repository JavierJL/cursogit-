import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <app-header></app-header>
  	<div class = "row">
  		<app-left></app-left>
  		<app-right></app-right>
  	</div>
  <app-footer></app-footer>
  `,
})
export class AppComponent  { }
