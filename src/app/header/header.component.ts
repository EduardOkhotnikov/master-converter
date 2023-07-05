import {Component} from '@angular/core';
import { CurrencydataService } from '../currencydata.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currency_uds = 'USD';
  currency_eur = 'EUR';
  currency_uah = 'UAH';

  uahToUsd = 0;
  uahToEur = 0;


  ngOnInit() {
    this.getBaseRates();
  }

  constructor(private currency:CurrencydataService){}
    getBaseRates()
    {
      this.currency
        .getBaseCurrencyData(this.currency_uah)
        .subscribe((data: any) => {
          const rates = data.rates;

          this.uahToUsd = 1 / rates[this.currency_uds]
          this.uahToEur = 1 / rates[this.currency_eur]
        });
    }
  }


