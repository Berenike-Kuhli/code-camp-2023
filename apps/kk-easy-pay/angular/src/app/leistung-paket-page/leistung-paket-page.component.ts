import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { LeistungsPaket } from '@pct/kk-easy-pay-common';

@Component({
  selector: 'pct-leistung-paket-page',
  templateUrl: './leistung-paket-page.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
// OnInit ist Interface, wie in Java
export class LeistungPaketPageComponent implements OnInit {
  //  hier greife ich auf die Daten zu, die ich in der page.html ausgebe
  pakete: LeistungsPaket[] = [];
  constructor(private entry: EntryService) {}

  // lifecycle hook, s. https://angular.io/guide/glossary#lifecycle-hook
  async ngOnInit() {
    this.pakete = await this.entry.listPakete();
  }
}
