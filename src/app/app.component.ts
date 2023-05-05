import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscribable } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable'
import { WorkoutSelectors } from './store/selectors';

interface AppState {
  message: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  [x: string]: any;

  
  
}
