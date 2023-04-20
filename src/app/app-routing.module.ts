import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { RegistrationComponent } from './registration/registration.component';
import { WorkoutsComponent } from './workouts/workouts.component';

const routes: Routes = [
  {
    component: WorkoutsComponent, path: 'workouts',  
  },
  {
    component: PasswordRecoveryComponent, path: 'password-recovery'
  },
  {
    component: AboutComponent, path: 'about'
  },
  {
    component: HomeComponent, path: 'home'
  },
  {
    component: RegistrationComponent, path: 'registration'
  },
  {
    component: LoginComponent, path: 'login'
  },
  {
    path: '', redirectTo: 'login' , pathMatch: 'full'
  },
  {
    component: PageNotFoundComponent, path: '**'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
