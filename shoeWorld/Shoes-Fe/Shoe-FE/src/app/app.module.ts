import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './component/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BodyComponent } from './component/body/body.component';
import { InfoComponent } from './component/info/info.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactComponent } from './component/contact/contact.component';
import { CartComponent } from './component/cart/cart.component';
import { DetailComponent } from './component/detail/detail.component';
import { ProfileComponent } from './component/profile/profile.component';
import { PurchaseHistoryComponent } from './component/purchase-history/purchase-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    BodyComponent,
    InfoComponent,
    AboutUsComponent,
    ContactComponent,
    CartComponent,
    DetailComponent,
    ProfileComponent,
    PurchaseHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
