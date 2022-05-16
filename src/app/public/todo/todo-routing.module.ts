import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TAddComponent } from './t-add/t-add.component';
import { TEditComponent } from './t-edit/t-edit.component';
import { TIndexComponent } from './t-index/t-index.component';

const routes: Routes = [
  { path: '', component: TIndexComponent },
  { path: 'add', component: TAddComponent },
  { path: 'edit/:id', component: TEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
