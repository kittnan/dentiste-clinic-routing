import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerManageComponent } from './components/customer-manage/customer-manage.component';
import { CustomerRegisterComponent } from './components/customer-register/customer-register.component';
import { ReceptionLayoutComponent } from './components/reception-layout/reception-layout.component';


const routes: Routes = [
  {
    path:'',component:ReceptionLayoutComponent,
    children:[
      {path:'register',component:CustomerRegisterComponent},
      {path:'manage',component:CustomerManageComponent},
      {path:'',redirectTo:'/reception/manage',pathMatch:'full'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionRoutingModule { }
