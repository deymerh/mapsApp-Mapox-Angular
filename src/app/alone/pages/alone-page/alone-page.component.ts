import { Component } from '@angular/core';
import { CounterAlonePageComponent } from '../counter-alone-page/counter-alone-page.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-alone-page',
  standalone: true,
  imports: [ CounterAlonePageComponent, SideMenuComponent ],
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.css'],
})
export class AlonePageComponent {

}
