import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FanComponent } from './entity/fan/fan.component';
import { LoginComponent } from './entity/login/login.component';
import { SavolComponent } from './entity/savol/savol.component';

const routes: Routes = [
  {
    path: 'fan',
    component: FanComponent
  },
  {
    path: 'savol',
    component: SavolComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
