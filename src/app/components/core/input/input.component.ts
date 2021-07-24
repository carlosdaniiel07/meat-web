import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core'
import { FormControlName } from '@angular/forms'

@Component({
  selector: 'meat-input',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {
  @Input() showErrorMessage = true
  @Input() errorMessage = 'Preencha corretamente'
  @ContentChild(FormControlName) formControl: FormControlName | null = null

  input: FormControlName | null = null

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.input = this.formControl
  }

  public get hasError(): boolean {
    return this.touched && (this.input?.invalid ?? false)
  }

  public get hasSuccess(): boolean {
    return this.touched && (this.input?.valid ?? false)
  }

  private get touched(): boolean {
    return this.input?.touched ?? false
  }
}
