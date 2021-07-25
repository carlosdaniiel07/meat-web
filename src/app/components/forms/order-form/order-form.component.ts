import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { PaymentMethod } from 'src/app/models/payment-method.enum'
import { ShoppingCartService } from 'src/app/services/shopping-cart.service'

@Component({
  selector: 'meat-order-form',
  templateUrl: './order-form.component.html',
})
export class OrderFormComponent implements OnInit {
  form: FormGroup

  constructor(
    private readonly fb: FormBuilder,
    private readonly shoppingCartServoce: ShoppingCartService
  ) {
    this.form = this.initForm()
  }

  ngOnInit(): void {}

  public get isFormValid(): boolean {
    return this.form.valid
  }

  public get isCartEmpty(): boolean {
    return this.shoppingCartServoce.cart.length === 0
  }

  private initForm(): FormGroup {
    return this.fb.group({
      address: this.fb.control('', [
        Validators.required,
        Validators.maxLength(100),
      ]),
      complement: this.fb.control('', [Validators.maxLength(255)]),
      number: this.fb.control('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      paymentMethod: this.fb.control(PaymentMethod.CreditCard, [
        Validators.required,
      ]),
    })
  }
}
