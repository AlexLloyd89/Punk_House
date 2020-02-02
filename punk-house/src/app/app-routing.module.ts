import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// Feature Modules
import { LandingModule } from "./landing/landing.module";
import { AboutModule } from "./about/about.module";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./landing/landing.module").then(m => LandingModule)
  },
  {
    path: "about",
    loadChildren: () => import("./about/about.module").then(m => AboutModule)
  },
  // If route not found, redirect to home
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
