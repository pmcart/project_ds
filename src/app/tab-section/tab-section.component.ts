import { Component} from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'tab-section',
    templateUrl: './tab-section.component.html'
})
export class TabSectionComponent {
@Input() tabShow:number = 1;

}