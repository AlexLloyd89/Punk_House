import { Routes, RouterModule } from "@angular/router";
import { LandingContainerComponent } from "./landing-container/landing-container.component";
import { NgModule } from "@angular/core";

const routes: Routes = [{ path: "", component: LandingContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {}
