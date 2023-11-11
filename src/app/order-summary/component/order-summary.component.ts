import { Component, OnInit } from '@angular/core';
import {OrderDTO} from "../../shared/models/OrderDTO";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderSummaryService} from "../service/order-summary.service";

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  orderSummary?: OrderDTO;
  obj: any;
  total?: any;
  showDialog: boolean = false;
  constructor(private route: ActivatedRoute, private orderService: OrderSummaryService, private router: Router) { }

  ngOnInit(): void {
    const data = this.route.snapshot.queryParams['data'];
    this.obj = JSON.parse(data);
    this.obj.userId=1;
    this.orderSummary = this.obj;

    console.log(this.obj);

    this.total = this.orderSummary.foodItemList.reduce((accumulator, currentValue) => {
      return accumulator + (currentValue.quantity * currentValue.price);
    }, 0);
  }

  saveOrder() {
    this.orderService.saveOrder(this.orderSummary)
      .subscribe(
        response => {
          this.showDialog = true;
        },
        error => {
          console.error('Failed to save data:', error);
        }
      );
  }
  closeDialog() {
    this.showDialog = false;
    this.router.navigate(['/']); // Replace '/home' with the actual route for your home page
  }



}
