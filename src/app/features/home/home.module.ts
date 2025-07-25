import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/our-services/services.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { LayoutModule } from '../layout/layout.module';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    ServicesComponent,
    ScheduleComponent,
    PricingComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [
    LayoutModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
