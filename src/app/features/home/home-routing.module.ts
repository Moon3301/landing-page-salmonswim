import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { DetailServiceComponent } from "./pages/detail-service/detail-service.component";
import { DetailPlan } from "./pages/detail-plan/detail-plan.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'detail-service/:id', component: DetailServiceComponent },
  { path: 'detail-plan/:id', component: DetailPlan },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
