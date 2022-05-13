import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UDeleteComponent } from './u-delete/u-delete.component';
import { UIndexComponent } from './u-index/u-index.component';

const routes: Routes = [
  { path: '', component: UIndexComponent },
  { path: 'delete/:id', component: UDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
