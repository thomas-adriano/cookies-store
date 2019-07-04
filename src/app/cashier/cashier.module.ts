import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatSelectModule } from "@angular/material/select";
import { CashierRoutingModule } from "./cashier-routing.module";
import { CashierComponent } from "./cashier.component";

@NgModule({
  declarations: [CashierComponent],
  imports: [
    CommonModule,
    CashierRoutingModule,
    MatButtonToggleModule,
    MatSelectModule
  ]
})
export class CashierModule {}
