import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CAddComponent } from './c-add/c-add.component';
import { CEditComponent } from './c-edit/c-edit.component';
import { CDeleteComponent } from './c-delete/c-delete.component';
import { CIndexComponent } from './c-index/c-index.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CAddComponent,
    CEditComponent,
    CDeleteComponent,
    CIndexComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule
  ]
})
export class CategoriesModule { }
