import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CurrencydataService} from "./currencydata.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [CurrencydataService],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
