import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TAddComponent } from './t-add/t-add.component';
import { TEditComponent } from './t-edit/t-edit.component';
import { TIndexComponent } from './t-index/t-index.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TAddComponent,
    TEditComponent,
    TIndexComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule
  ]
})
export class TodoModule { }
