import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/our-services/services.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeRoutingModule } from './home-routing.module';
import { DetailServiceComponent } from './pages/detail-service/detail-service.component';
import { DetailPlan } from './pages/detail-plan/detail-plan.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    ServicesComponent,
    ScheduleComponent,
    PricingComponent,
    ContactComponent,
    AboutComponent,
    DetailServiceComponent,
    DetailPlan,
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
