import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ProductComponent } from './product/product.component';
import { AvatarModule } from 'primeng/avatar';
import { AnimateModule } from 'primeng/animate';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { StyleClassModule } from 'primeng/styleclass';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,

    ProductComponent,
    BarChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    AvatarModule,
    DialogModule,
    InputTextModule,
    BrowserAnimationsModule,
    AnimateModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    StyleClassModule,
    NgxChartsModule,

  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
