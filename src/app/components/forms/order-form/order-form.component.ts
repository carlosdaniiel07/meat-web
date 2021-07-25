import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { catchError, finalize } from 'rxjs/operators'
import { CreateOrderDto } from 'src/app/models/dto/create-order.dto'
import { PaymentMethod } from 'src/app/models/payment-method.enum'
import { OrderService } from 'src/app/services/order.service'
import { ShoppingCartService } from 'src/app/services/shopping-cart.service'

@Component({
  selector: 'meat-order-form',
  templateUrl: './order-form.component.html',
})
export class OrderFormComponent implements OnInit {
  form: FormGroup
  submiting = false

  constructor(
    private readonly fb: FormBuilder,
    private readonly orderSeervice: OrderService,
    private readonly shoppingCartService: ShoppingCartService,
    private readonly toast: ToastrService,
    private readonly router: Router
  ) {
    this.form = this.initForm()
  }

  ngOnInit(): void {}

  public get isFormValid(): boolean {
    return this.form.valid
  }

  public get isCartEmpty(): boolean {
    return this.shoppingCartService.cart.length === 0
  }

  public submit(): void {
    if (this.form.invalid) {
      return
    }

    this.submiting = true

    this.orderSeervice
      .save({
        ...this.form.value,
        items: this.shoppingCartService.cart.map((cartItem) => ({
          product: cartItem.product.id,
          quantity: cartItem.quantity,
        })),
      })
      .pipe(finalize(() => (this.submiting = false)))
      .subscribe(
        () => {
          this.toast.success('Pedido realizado com sucesso!')
          this.shoppingCartService.clear()
          this.router.navigate(['restaurants'])
        },
        () => {
          this.toast.error(
            'Ocorreu um erro ao realizar o pedido. Tente novamente mais tarde!'
          )
        }
      )
  }

  private initForm(): FormGroup {
    return this.fb.group({
      deliveryAddress: this.fb.group({
        street: this.fb.control('', [
          Validators.required,
          Validators.maxLength(100),
        ]),
        complement: this.fb.control('', [Validators.maxLength(255)]),
        number: this.fb.control('', [
          Validators.required,
          Validators.maxLength(10),
        ]),
      }),
      paymentMethod: this.fb.control(PaymentMethod.CreditCard, [
        Validators.required,
      ]),
    })
  }
}
