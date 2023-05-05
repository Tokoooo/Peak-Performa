import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoreModule } from '@ngrx/store';
import { WorkoutState } from './store/state/workouts.state';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { SubstringPipe } from '../app/pipes/substring.pipe';

import { AuthService } from './services/auth.service';
import { WorkoutService } from './services/workout.service';

import { environment } from 'src/environments/environment';
import { WorkoutEffects } from './store/effects/workouts.effect';
import { workoutReducer } from './store/reducers/workouts.reducer';
import { StoreDevtools } from '@ngrx/store-devtools';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { BodyFatCalculatorComponent } from './body-fat-calculator/body-fat-calculator.component';



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
    AboutComponent,
    PageNotFoundComponent,
    LandingPageComponent,
    CalculatorComponent,
    BodyFatCalculatorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([
      WorkoutEffects
    ]),
    NgxPaginationModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    StoreModule.forRoot({
      workout: workoutReducer
    })
  ],
  providers: [WorkoutService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
