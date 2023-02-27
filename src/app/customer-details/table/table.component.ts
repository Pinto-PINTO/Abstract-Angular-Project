import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CustomerModel } from 'src/app/shared/customer-model.model';
import { CustomerService } from 'src/app/shared/customer.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styles: [
  ]
})
export class TableComponent implements OnInit{

  constructor(public service: CustomerService) {}

  ngOnInit(): void {
    this.service.getAllRecords();
  }

  populateForm(selectedRecord:CustomerModel) {
    this.service.formData = selectedRecord;
    console.warn(selectedRecord);
  }


}
