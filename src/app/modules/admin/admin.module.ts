import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminUsersManageComponent } from './components/admin-users-manage/admin-users-manage.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminUsersManageComponent,
    AdminHeaderComponent,
    AdminHomeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AgGridModule
  ]
})
export class AdminModule { }
