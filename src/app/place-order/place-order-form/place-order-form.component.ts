import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { OrderService } from 'src/app/shared/order/order.service';

@Component({
  selector: 'app-place-order-form',
  templateUrl: './place-order-form.component.html',
  styleUrls: ['./place-order-form.component.scss'],
})
export class PlaceOrderFormComponent implements OnInit, OnDestroy {
  public orderForm!: FormGroup;
  public orderButtonLabel = 'Place Your Order';

  private sub!: Subscription;

  constructor(private fb: FormBuilder, private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      name: [null, Validators.required],
      phone: [null, Validators.required],
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  public placeOrder(): void {
    const { name, phone } = this.orderForm.value;
    this.sub = this.orderService.placeOrder(name, phone).subscribe((i) => {
      console.log(i);
      this.setFormReadonly();
    });
  }

  private setFormReadonly(): void {
    this.orderButtonLabel = 'Order Placed';
    this.orderForm.disable();
  }
}
