import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { NavComponent } from './public-nav/nav.component';
import { PlayoutComponent } from './playout/playout.component';


@NgModule({
  declarations: [
    NavComponent,
    PlayoutComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
