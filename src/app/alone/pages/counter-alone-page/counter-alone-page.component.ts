import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'counter-alone-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-alone-page.component.html',
  styleUrls: ['./counter-alone-page.component.css']
})
export class CounterAlonePageComponent {

  @Input()
  public counter: number = 10;

}
