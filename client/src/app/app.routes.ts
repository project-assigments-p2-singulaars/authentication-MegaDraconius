import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
            {
                path:'dashboard', component:DashboardComponent,canActivate: [authGuard]
            },
            {
                path:'login', component:LoginComponent
            },
            {
                path:'register', component:RegisterComponent
            },
];
