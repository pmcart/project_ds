import { Component, Input } from '@angular/core';

@Component({
  selector: 'maincontainer',
  template: `
    <div class='container-fluid'>
     <div class="row">
    <div class="col-sm-12">
    <header-component></header-component>
    
      <router-outlet></router-outlet>
   </div>
      </div>
    </div>
  `
  
})

export class MainContainerComponent {

   
}

