import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { CartComponent } from './component/cart/cart.component';
import { DetailComponent } from './component/detail/detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import {HttpClientModule} from "@angular/common/http";
import {AllShoesComponent} from "./component/body/all-shoes/all-shoes.component";
import { InfoComponent } from './component/info/info.component';
import { JordanComponent } from './component/body/jordan/jordan.component';
import { DiorComponent } from './component/body/dior/dior.component';
import { SneakerComponent } from './component/body/sneaker/sneaker.component';
import { SandalComponent } from './component/body/sandal/sandal.component';
import { DepComponent } from './component/body/dep/dep.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactComponent } from './component/contact/contact.component';
import { GiaySucComponent } from './component/body/giay-suc/giay-suc.component';
import { BodiiComponent } from './component/body/bodii/bodii.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    DetailComponent,
    HeaderComponent,
    FooterComponent,
    AllShoesComponent,
    InfoComponent,
    JordanComponent,
    DiorComponent,
    SneakerComponent,
    SandalComponent,
    DepComponent,
    AboutUsComponent,
    ContactComponent,
    GiaySucComponent,
    BodiiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
