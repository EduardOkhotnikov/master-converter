import { Component } from '@angular/core';
import { CurrencydataService } from './currencydata.service';
import { HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  currency_json: any = [];
  cont1 = "USD";
  cont2 = "USD";
  result: any = [];
  amount: any = [];

  change_base(a: string) {
    this.cont1 = a;
  }

  to_country(b: string) {
    this.cont2 = b;

  }

  amounts(c: string) {
    this.amount = c;

  }

  constructor(private currency: CurrencydataService) {
  }

  convert() {

    {
      this.currency.getBaseCurrencyData(this.cont1).subscribe(data => {
        this.currency_json = JSON.stringify(data);
        this.currency_json = JSON.parse(this.currency_json);
        this.amount = JSON.parse(this.amount)



        if (this.cont2 === "USD") {
          this.result = this.currency_json.rates.USD * (this.amount)

        }


        if (this.cont2 === "EUR") {
          this.result = this.currency_json.rates.EUR * (this.amount)
        }

        if (this.cont2 === "PLN") {
          this.result = this.currency_json.rates.PLN * (this.amount)
        }

        if (this.cont2 === "UAH") {
          this.result = this.currency_json.rates.UAH * (this.amount)
        }
        if (this.cont2 === "AED") {
          this.result = this.currency_json.rates.AED * (this.amount)
        }
      })

    }
  }
}
