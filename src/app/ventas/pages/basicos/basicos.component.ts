import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'piero';
  nombreUpper: string = 'PIERO';
  nombreCompleto: string = 'pIeRo AlDaVes';
  fecha: Date = new Date();


}
