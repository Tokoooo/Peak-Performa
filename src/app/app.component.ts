import { Component, OnInit } from '@angular/core';
import { WorkoutService } from './services/workout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  constructor(public workoutService: WorkoutService) {}
  ngOnInit(): void {
    throw new Error('');
  }

  getApi(): any {
    this.workoutService.getApi().subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
