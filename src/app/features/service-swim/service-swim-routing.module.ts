import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServiceSwimTestComponent } from "./service-swim.component";

const routes: Routes = [

  { path: '', component: ServiceSwimTestComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServiceSwimRoutingModule { }
