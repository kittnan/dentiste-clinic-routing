import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionRoutingModule } from './reception-routing.module';
import { ReceptionLayoutComponent } from './components/reception-layout/reception-layout.component';
import { CustomerRegisterComponent } from './components/customer-register/customer-register.component';
import { CustomerManageComponent } from './components/customer-manage/customer-manage.component';
import { ReceptionHeaderComponent } from './components/reception-header/reception-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ReceptionLayoutComponent,
    CustomerRegisterComponent,
    CustomerManageComponent,
    ReceptionHeaderComponent,
    ReceptionHeaderComponent
  ],
  imports: [
    CommonModule,
    ReceptionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AgGridModule,
    NgbModule
  ]
})
export class ReceptionModule { }
