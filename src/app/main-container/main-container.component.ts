import { Component, Input } from '@angular/core';

@Component({
  selector: 'maincontainer',
  template: `
    <div class='container-fluid noPadding'>
     <div class="">
    <div class="">
    <header-component></header-component>

      <router-outlet></router-outlet>
   </div>
      </div>
    </div>
  `
  
})

export class MainContainerComponent {

   
}

