import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './customer-details/table/table.component';
import { FormComponent } from './customer-details/form/form.component';
import { HomeComponent } from './customer-details/home/home.component';

const routes: Routes = [
  {
    component: TableComponent,
    path: 'table'
  },
  {
    component: FormComponent,
    path: 'form'
  },
  {
    component: HomeComponent,
    path: ''
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
