import { Routes } from '@angular/router';
import { LoginComponent } from '../app/Pages/login/login.component';
import { HomeComponent } from '../app/Pages/home/home.component';
 
export const routes: Routes = [
  { path: '', component: LoginComponent },  
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];