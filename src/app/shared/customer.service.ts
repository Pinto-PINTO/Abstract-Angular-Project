import { Injectable } from '@angular/core';
import { CustomerModel } from './customer-model.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  formData: CustomerModel = new CustomerModel();
  list: CustomerModel[];


  readonly baseURL = "http://localhost:34775/api/customerdetail";

  // 1. POST REQUEST 
  postCustomerDetail(data: any) {

    console.log("From Service: ",data)
    return this.http.post(this.baseURL, data)

  }


  // 2. GET REQUEST
  getAllRecords() {
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as CustomerModel[]);
  }



}
