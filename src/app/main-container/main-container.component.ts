import { Component, Input } from '@angular/core';

@Component({
  selector: 'maincontainer',
  template: `
    <div class='container-fluid'>
    <header-component></header-component>
      <router-outlet></router-outlet>
    </div>
  `
  
})

export class MainContainerComponent {

   
}

