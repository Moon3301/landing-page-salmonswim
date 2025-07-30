import { NgModule } from "@angular/core";
import { ServiceSwimRoutingModule } from "./service-swim-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { ServiceSwimTestComponent } from "./service-swim.component";

@NgModule({
  declarations: [
    ServiceSwimTestComponent
  ],
  imports: [
    ServiceSwimRoutingModule,
    SharedModule
  ],
  providers: [

  ],
})
export class ServiceSwimModule { }
