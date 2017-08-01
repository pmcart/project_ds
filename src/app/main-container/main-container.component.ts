import { Component, Input } from '@angular/core';

@Component({
  selector: 'maincontainer',
  template: `
    <div class='container-fluid'>
     <div class="row">
    <div class="col-sm-12">
    <header-component></header-component>
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
<script>
    $(document).ready(function() {
        $(".dropdown-toggle").dropdown();
    });
</script>
      <router-outlet></router-outlet>
   </div>
      </div>
    </div>
  `
  
})

export class MainContainerComponent {

   
}

