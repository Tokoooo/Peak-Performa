import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { WorkoutService } from '../services/workout.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, debounceTime, switchMap, debounce } from 'rxjs';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.less'],
})

export class WorkoutsComponent implements OnInit {
  @Input() items: any;
  @Output() filterChanged = new EventEmitter<any>();
  p: number = 1
  itemsPerPage: number = 15
  totalWorkouts: any;

  workoutData!: any;
  workoutID!: number;

  searchForm = new FormGroup({
    search: new FormControl(''),
  });

  constructor(public workoutService: WorkoutService) {
    this.searchForm.valueChanges.pipe(debounceTime(400)).subscribe((values) => {
      this.getApi(values.search)
    });
  }
  ngOnInit(): void {
    this.getApi();
  }

  getApi(search?: string | null | undefined): any {
    this.workoutService.getApi(search).subscribe(
      (data) => {
        this.workoutData = data;
        this.workoutID = this.workoutData[0]?.id      
        this.totalWorkouts = data.length                  
      },
    );
  }
}
