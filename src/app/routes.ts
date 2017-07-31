import { Routes } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';
import { LocationDisplayComponent } from './location/location-display.component';
import { AbOfProcessComponent } from './abofprocess/abofprocess.component';
import { ReputationComponent } from './reputation/reputation.component';

export const appRoutes: Routes = [
  { path: 'home', component: MainSectionComponent },
  { path: 'process',      component: AbOfProcessComponent },
  {path: 'reputation', component:ReputationComponent},
    { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

];