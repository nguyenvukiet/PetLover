import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import {PriceComponent} from './price/price.component';
import { BookingComponent } from './booking/booking.component';
import {BlogComponent} from './blog/blog.component';
import { ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
  {path: "about", component: AboutComponent},
  {path: "service", component: ServiceComponent},
  {path: "price", component: PriceComponent},
  {path: "booking", component: BookingComponent},
  {path: "blog",component:BlogComponent},
  {path: "contact",component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent =[HomeComponent,AboutComponent];

