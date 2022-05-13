import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthAdminGuard } from "./_helpers/auth-admin.guard";
import { AuthUserGuard } from "./_helpers/auth-user.guard";

const routes: Routes = [
    {
        path: 'home', loadChildren: () => import('./public/public.module')
            .then(m => m.PublicModule), canActivate: [AuthUserGuard]
    },
    {
        path: 'admin', loadChildren: () => import('./admin/admin.module')
            .then(m => m.AdminModule), canActivate: [AuthAdminGuard]
    },
    {
        path: '', loadChildren: () => import('./auth/auth.module')
            .then(m => m.AuthModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }