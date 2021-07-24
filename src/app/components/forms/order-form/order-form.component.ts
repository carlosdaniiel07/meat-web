import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'meat-order-form',
  templateUrl: './order-form.component.html'
})
export class OrderFormComponent implements OnInit {
  form: FormGroup

  constructor(
    private readonly fb: FormBuilder
  ) {
    this.form = this.initForm()
  }

  ngOnInit(): void {
  }

  private initForm(): FormGroup {
    return this.fb.group({
      address: this.fb.control('', [Validators.required, Validators.maxLength(100)]),
      complement: this.fb.control('', [Validators.maxLength(255)]),
      number: this.fb.control('', [Validators.required, Validators.maxLength(10)]),
    })
  }
}
