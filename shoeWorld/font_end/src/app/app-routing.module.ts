import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {LoginComponent} from "./component/login/login.component";
import {CartComponent} from "./component/cart/cart.component";
import {DetailComponent} from "./component/detail/detail.component";
import {HeaderComponent} from "./component/header/header.component";
import {FooterComponent} from "./component/footer/footer.component";
import {AllShoesComponent} from "./component/body/all-shoes/all-shoes.component";
import {InfoComponent} from "./component/info/info.component";
import {JordanComponent} from "./component/body/jordan/jordan.component";
import {DiorComponent} from "./component/body/dior/dior.component";
import {SneakerComponent} from "./component/body/sneaker/sneaker.component";
import {SandalComponent} from "./component/body/sandal/sandal.component";
import {DepComponent} from "./component/body/dep/dep.component";
import {AboutUsComponent} from "./component/about-us/about-us.component";
import {ContactComponent} from "./component/contact/contact.component";
import {GiaySucComponent} from "./component/body/giay-suc/giay-suc.component";


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartComponent},
  {path:'detail',component:DetailComponent},
  {path:'body',component:AllShoesComponent},
  {path:'info',component:InfoComponent},
  {path:'jordan',component:JordanComponent},
  {path:'dior',component:DiorComponent},
  {path:'sneaker',component:SneakerComponent},
  {path:'sandal',component:SandalComponent},
  {path:'dep',component:DepComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'contact',component:ContactComponent},
  {path:'suc',component:GiaySucComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
