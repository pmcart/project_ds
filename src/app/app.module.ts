import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here


import { MainContainerComponent } from './main-container/main-container.component';
import { HeaderComponent } from './header/header.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { LocationDisplayComponent } from './location/location-display.component';
import { AbOfProcessComponent } from './abofprocess/abofprocess.component';
import { ReputationComponent } from './reputation/reputation.component';
import { TabSectionComponent } from './tab-section/tab-section.component';
import { appRoutes } from './routes';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, MainContainerComponent, HeaderComponent, MainSectionComponent,AbOfProcessComponent,ReputationComponent,TabSectionComponent, LocationDisplayComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
