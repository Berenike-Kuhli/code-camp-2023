import { Component, Input } from '@angular/core';
import { LeistungsPaket } from '@pct/kk-easy-pay-common';

@Component({
  selector: 'pct-leistung-paket-display',
  templateUrl: './leistung-paket-display.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class LeistungPaketDisplayComponent {
  // @Input ist ein sog. Decorator; TODO Bedeutung nochmal nachschauen
  @Input() paket: LeistungsPaket = {
    nr: 1,
    description: 'Test Descr',
    price: 123,
  };

  // aha, Angular hat auch getter-setter-Methoden; die sind quasi Properties der Klasse, muss nicht als Funktion aufgerufen werden
  // this bedeutet aktuelles Objekt
  //toFixed(2) legt Nachkommastellen fest
  get priceEuro() {
    return (this.paket.price / 100).toFixed(2) + ' €';
  }
}
