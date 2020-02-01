import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingContainerComponent } from "./landing-container/landing-container.component";
import { LandingRoutingModule } from "./landing-routing.module";
import { HeroImageComponent } from "./hero-image/hero-image.component";
import { SharedModule } from "../shared/shared.module";

// Material Imports

import { MatToolbarModule } from "@angular/material";
import { BrowseComponent } from "./browse/browse.component";

@NgModule({
  declarations: [
    LandingContainerComponent,
    HeroImageComponent,
    BrowseComponent
  ],
  imports: [CommonModule, LandingRoutingModule, MatToolbarModule, SharedModule]
})
export class LandingModule {}
