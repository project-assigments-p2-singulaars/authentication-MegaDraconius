import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [
     {
        path:'', component:LayoutComponent,
        children:[
            {
                path:'', redirectTo:"dashboard" ,pathMatch:"full"
            },
            {
                path:'dashboard', component:DashboardComponent
            },
            {
                path:'login', component:LoginComponent
            },
            {
                path:'register', component:RegisterComponent
            },
        ]
     },

];
