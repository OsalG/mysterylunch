import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MysterylunchComponent } from './mysterylunch/mysterylunch.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mysterylunch', component: MysterylunchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
