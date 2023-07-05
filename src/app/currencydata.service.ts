import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment.development";

@Injectable({
  providedIn: 'root'
})

export class CurrencydataService {
  constructor(private http: HttpClient) {}
  getBaseCurrencyData(country: string) {
    let url = 'https://api.exchangerate.host/latest?base=' + country;
    //якщо просто вставити посилання з environment.ts , то воно працює, а environment чомусь не працює
    return this.http.get(url);
  }
}




