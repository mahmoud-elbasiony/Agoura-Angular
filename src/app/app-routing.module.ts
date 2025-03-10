import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HomeComponent } from './Components/home/home.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';
import { CheckoutComponent } from './Components/Payment/checkout/checkout.component';
import { ProfileComponent } from './Components/Profile/profile/profile.component';
import { EditProfileComponent } from './Components/Profile/EditProfile/edit-profile/edit-profile.component';
import { AboutComponent } from './Components/about/about.component';
import { CreateProductFormComponent } from './Components/create-product-form/create-product-form.component';
import { BidHistoryComponent } from './Components/bid-history/bid-history.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';
import { OtpComponent } from './Components/otp/otp.component';
import { NotfoundPageComponent } from './Components/notfound-page/notfound-page.component';
import { DefaultLayoutComponent } from './Components/dashboard/containers';
import { BidsComponent } from './Components/dashboard/views/bids/bids.component';
import { ChartsComponent } from './Components/dashboard/views/charts/charts.component';
import { DashboardBidDetailsComponent } from './Components/dashboard/views/dashboard-bid-details/dashboard-bid-details.component';
import { EditProductFormComponent } from './Components/edit-product-form/edit-product-form.component';
import { UserBidsComponent } from './Components/Profile/bids/bids.component';
import { OrdersComponent } from './Components/Profile/orders/orders.component';
import { ApartmentsComponent } from './Components/Profile/apartments/apartments.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ChangePassComponent } from './Components/Profile/changepass/changepass.component';
import { DashboardUsersComponent } from './Components/dashboard/views/dashboard-users/dashboard-users.component';
import { PaymentSuccessComponent } from './Components/Payment/payment-success/payment-success.component';
import { PaymentFailComponent } from './Components/Payment/payment-fail/payment-fail.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'place/create', component: CreateProductFormComponent , canActivate:[AuthGuard] },
      { path: 'place/:id', component: ProductDetailsComponent },
      { path: 'place/:id/edit', component: EditProductFormComponent , canActivate:[AuthGuard] },
      { path: 'place/:id/history', component: BidHistoryComponent , canActivate:[AuthGuard] },
      { path: 'about', component: AboutComponent },
      { path: "checkout/:id" , component : CheckoutComponent , canActivate:[AuthGuard]},
      { path: "users/:id",component:ProfileComponent , canActivate:[AuthGuard] ,children:[
          { path:"edit",component:EditProfileComponent , pathMatch:'full'},
          { path:"bids",component:UserBidsComponent},
          { path:"orders",component:OrdersComponent},
          { path:"apartments",component:ApartmentsComponent},
          { path:"password",component:ChangePassComponent},
                ]},
    ],
  },
  { path: "dashboard" ,component:DefaultLayoutComponent ,children:[
    { path: '', redirectTo: 'charts', pathMatch: 'full' },
    { path: "apartments",component:BidsComponent },
    { path: "apartments/:id",component:DashboardBidDetailsComponent },
    { path: "charts",component:ChartsComponent },
    {path:"users",component:DashboardUsersComponent}
  ]},
  {path : '404-NotFound', component: NotfoundPageComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'signup' , component: SignUpComponent},
  {path : 'forgetpassword' , component: ForgetPasswordComponent},
  {path: 'otp', component: OtpComponent},
  {path: 'resetpassword', component: ResetPasswordComponent},
  { path: "PaymentFail" , component : PaymentFailComponent , canActivate:[AuthGuard]},
  { path: "PaymentSuccess" , component : PaymentSuccessComponent , canActivate:[AuthGuard]},
  {path : '**', component: NotfoundPageComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
