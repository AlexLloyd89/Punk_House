import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingModule } from "./landing/landing.module";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./landing/landing.module").then(m => LandingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
