import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit {

  public additionalQuantities = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  constructor() { }

  ngOnInit() {
  }

}
