import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms'; 
import { CustomerModel } from 'src/app/shared/customer-model.model';
import { CustomerService } from 'src/app/shared/customer.service';

// formGroup -> Handles the entire form
// formControl -> Handles a single field

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit{


  // ----------------------------------------------------
  // ---------------- Frontend START --------------------
  // ----------------------------------------------------
  customerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]+$')]),
    age: new FormControl('', [Validators.required, Validators.maxLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email])
  })


  // Getter Validations - to show error message
  get name() {
    return this.customerForm.get('name');
  }

  get age() {
    return this.customerForm.get('age');
  }

  get email() {
    return this.customerForm.get('email');
  }

  // --------------------------------------------------
  // ---------------- Frontend END --------------------
  // --------------------------------------------------


  // ---------------------------------------------------
  // ---------------- Backend START --------------------
  // ---------------------------------------------------

  constructor(public service: CustomerService) {}

  ngOnInit(): void {
    
  }

  submitDetails() {
    
    console.warn(this.customerForm.value);

    this.service.postCustomerDetail(this.customerForm.value).subscribe(
      res => {
        this.resetFormInputs();
      },
      err => { console.log(err); }
    );
    
  }

  resetFormInputs() {
    this.customerForm.reset();
    this.service.formData = new CustomerModel();
  }

  // -------------------------------------------------
  // ---------------- Backend END --------------------
  // -------------------------------------------------

}
