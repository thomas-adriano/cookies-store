import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "cashier",
    loadChildren: () =>
      import("./cashier/cashier.module").then(m => m.CashierModule)
  },
  { path: "", redirectTo: "/cashier", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
