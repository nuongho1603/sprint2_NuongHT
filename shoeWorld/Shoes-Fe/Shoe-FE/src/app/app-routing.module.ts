import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {HeaderComponent} from "./component/header/header.component";
import {FooterComponent} from "./component/footer/footer.component";
import {LoginComponent} from "./component/login/login.component";
import {BodyComponent} from "./component/body/body.component";
import {InfoComponent} from "./component/info/info.component";
import {ContactComponent} from "./component/contact/contact.component";
import {AboutUsComponent} from "./component/about-us/about-us.component";
import {DetailComponent} from "./component/detail/detail.component";
import {CartComponent} from "./component/cart/cart.component";


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'contact',component: ContactComponent},
  {path:'aboutUs',component: AboutUsComponent},
  {path:'login',component: LoginComponent},
  {path:'body',component: BodyComponent},
  {path:'info',component: InfoComponent},
  {path:'detail',component: DetailComponent},
  {path:'cart' ,component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
