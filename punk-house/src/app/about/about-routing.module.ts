import { Routes, RouterModule } from "@angular/router";

import { AboutContainerComponent } from "./about-container/about-container.component";
import { NgModule } from "@angular/core";

const routes: Routes = [{ path: "", component: AboutContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
