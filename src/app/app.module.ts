import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'

import { NgxPaginationModule } from 'ngx-pagination'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WorkoutsComponent } from './workouts/workouts.component';
import { HeaderComponent } from './header/header.component';

import { SubstringPipe } from '../app/pipes/substring.pipe';
import { WorkoutService } from './services/workout.service';

import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms'

import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';

import { LoginComponent } from './login/login.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component'

import { AuthService } from './services/auth.service';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutsComponent,
    HeaderComponent,
    SubstringPipe,
    FooterComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    PasswordRecoveryComponent,
    AboutComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    WorkoutService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
