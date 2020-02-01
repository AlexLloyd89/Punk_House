import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingContainerComponent } from "./landing-container/landing-container.component";
import { LandingRoutingModule } from "./landing-routing.module";
import { HeroImageComponent } from "./hero-image/hero-image.component";

// Material Imports

import { MatToolbarModule } from "@angular/material";

@NgModule({
  declarations: [LandingContainerComponent, HeroImageComponent],
  imports: [CommonModule, LandingRoutingModule, MatToolbarModule]
})
export class LandingModule {}
