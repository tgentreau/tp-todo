import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UIndexComponent } from './u-index/u-index.component';
import { UDeleteComponent } from './u-delete/u-delete.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UIndexComponent,
    UDeleteComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
