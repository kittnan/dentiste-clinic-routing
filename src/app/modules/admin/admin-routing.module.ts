import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminUsersManageComponent } from './components/admin-users-manage/admin-users-manage.component';

const routes: Routes = [
  {
    path:'',component:AdminDashboardComponent,
    children:[
      {path:'users-manage',component:AdminUsersManageComponent},
      {path:'home',component:AdminHomeComponent},
      {path:'',redirectTo:'/admin/home',pathMatch:'full'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
