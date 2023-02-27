import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Reactive Form
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { FormComponent } from './customer-details/form/form.component';
import { TableComponent } from './customer-details/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './customer-details/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    FormComponent,
    TableComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
