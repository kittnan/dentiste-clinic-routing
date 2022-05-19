import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminGuard } from './guards/admin.guard';
import { ReceptionGuard } from './guards/reception.guard';
import { AdminModule } from './modules/admin/admin.module';
import { ReceptionModule } from './modules/reception/reception.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'admin', canActivate: [AdminGuard], loadChildren: () => AdminModule },
  { path: 'reception', canActivate: [ReceptionGuard], loadChildren: () => ReceptionModule },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
