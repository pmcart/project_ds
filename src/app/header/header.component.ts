import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'header-component',
  styles: ['.btn-secondary.active { color:white; background-color: #f0ad4e;} .contact-list { list-style-type:none; }  .contact-text{color:#f0ad4e;} .contact-strong{color:white;}'],
  template: `
 

    <header class="intro-header">
        <div class="container">
            <div class="intro-message">
                <h1>Dessie Shiels Solicitors</h1>
                <h3>Letterkenny, Co.Donegal</h3>
                     <h3>Specialists in Commercial and Property Law</h3>
                <hr class="intro-divider">
                <ul class="list-inline intro-social-buttons">
                    <li class="list-inline-item">
                        <a routerLink="/home" routerLinkActive="active" class="btn btn-secondary btn-lg"> <span class="network-name">About Us and Our Services</span></a>
                    </li>
                    <li class="list-inline-item">
                        <a routerLink="/process" routerLinkActive="active" class="btn btn-secondary btn-lg"> <span class="network-name">Abuse of Process Book</span></a>
                    </li>
                    <li class="list-inline-item">
                        <a routerLink="/reputation" routerLinkActive="active" class="btn btn-secondary btn-lg"> <span class="network-name">Our Reputation</span></a>
                    </li>
                </ul>
                <ul class="list-inline contact-list">
                                 <li class="list-inline-item"><h3 class="contact-text"><strong  class="contact-strong">Tel : </strong> 074 9126668</h3></li>
            <li class="list-inline-item"><h3 class="contact-text"><strong class="contact-strong">Fax : </strong> 074 9126669</h3></li>
            </ul>
            </div>

        </div>
    </header>
    `
})
export class HeaderComponent {

constructor(private router: Router){

}
 

}
