import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayoutComponent } from './playout/playout.component';

const routes: Routes = [
  {
    path: '', component: PlayoutComponent, children: [
      { path: '', redirectTo: 'todo', pathMatch: 'full' },
      { 
        path: 'todo', loadChildren: () => import('./todo/todo.module')
          .then(m=> m.TodoModule)
      }     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
