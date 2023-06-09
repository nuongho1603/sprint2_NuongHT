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
import {ProfileComponent} from "./component/profile/profile.component";
import {PurchaseHistoryComponent} from "./component/purchase-history/purchase-history.component";
import {AdminGuard} from "./security/admin.guard";
import {ErroComponent} from "./component/erro/erro.component";


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'contact',component: ContactComponent},
  {path:'aboutUs',component: AboutUsComponent},
  {path:'login',component: LoginComponent},
  {path:'body',component: BodyComponent},
  {path:'info',component: InfoComponent},
  {path:'detail/:idShoes',component: DetailComponent},
  {path:'cart' ,component: CartComponent,canActivate: [AdminGuard]},
  {path:'profile' ,component: ProfileComponent},
  {path:'purchase' ,component: PurchaseHistoryComponent},
  {path:'**' ,component: ErroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
