import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlayoutComponent } from './alayout/alayout.component';

const routes: Routes = [
  {
    path: '', component: AlayoutComponent, children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      {
        path: 'users', loadChildren: () => import('./users/users.module')
          .then(m=> m.UsersModule)
      },
      {
        path: 'categories', loadChildren: () => import('./categories/categories.module')
          .then(m=> m.CategoriesModule)
      },
      { path: '**', redirectTo:'users' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
