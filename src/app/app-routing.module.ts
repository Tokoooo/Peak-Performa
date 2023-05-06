import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { BodyFatCalculatorComponent } from './body-fat-calculator/body-fat-calculator.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/landing-page'])

const routes: Routes = [
  {
    component: WorkoutsComponent, path: 'workouts', canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    component: BodyFatCalculatorComponent, path: 'bodyFatCalc', canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    component: AboutComponent, path: 'about', canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    component: CalculatorComponent, path: 'calculator', canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    component: HomeComponent, path: 'home', canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    component: RegistrationComponent, path: 'registration'
  },
  {
    component: LoginComponent, path: 'login'
  },
  {
    component: LandingPageComponent, path: 'landing-page'
  },
  {
    path: '', redirectTo: 'landing-page' , pathMatch: 'full'
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
