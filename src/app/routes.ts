import { Routes } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';
import { LocationDisplayComponent } from './location/location-display.component';

export const appRoutes: Routes = [
  { path: 'main-section', component: MainSectionComponent },
  { path: 'main',      component: LocationDisplayComponent },
    { path: '',
    redirectTo: '/main-section',
    pathMatch: 'full'
  },

];