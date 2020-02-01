import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingModule } from "./landing/landing.module";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./landing/landing.module").then(m => LandingModule)
  },
  // If route not found, redirect to home
  { path: "**", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
