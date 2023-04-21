import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'


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
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './login/login.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component'

import { AuthService } from './services/auth.service';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import {MatCardModule} from '@angular/material/card';
import { environment } from 'src/environments/environment';

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
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatCardModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    WorkoutService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
