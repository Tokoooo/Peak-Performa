import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { HeaderComponent } from './header/header.component';
import { SubstringPipe } from '../app/pipes/substring.pipe';
import { WorkoutService } from './services/workout.service';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    WorkoutsComponent,
    HeaderComponent,
    SubstringPipe,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WorkoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
